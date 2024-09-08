import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 定义 Sidebar 项的类型
interface SidebarItem {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItem[];
}

// 动态生成侧边栏的函数
export function getSidebar(dir: string): SidebarItem[] {
  const fullPath = path.resolve(__dirname, '../../../docs/zh', dir);

  if (!fs.existsSync(fullPath)) {
    console.error(`目录 ${fullPath} 不存在`);
    return [];
  }

  const files = fs.readdirSync(fullPath);
  let indexTitle = '';
  let items: SidebarItem[] = [];

  // 处理目录中的所有文件
  files.forEach(file => {
    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是文件夹，递归获取子目录的内容
      const subDirItems = getSidebar(path.join(dir, file));

      // 检查是否有 index.md 文件，使用 index.md 的 title 作为文件夹的标题
      const indexFilePath = path.join(filePath, 'index.md');
      if (fs.existsSync(indexFilePath)) {
        const fileContent = fs.readFileSync(indexFilePath, 'utf-8');
        const { data } = matter(fileContent);
        const folderTitle = data.title || file; // 使用 index.md 中的 title 或文件夹名
        items.push({
          text: folderTitle,
          collapsed: false,
          items: subDirItems
        });
      }
    } else if (file === 'index.md') {
      // 读取文件夹的 index.md 文件，并提取 title 作为文件夹的标题
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      indexTitle = data.title || '首页'; // 默认使用 '首页' 作为文件夹的 index.md 标题
    } else if (file.endsWith('.md')) {
      // 非 index.md 文件的处理
      const fileName = file.replace('.md', '');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const title = data.title || fileName;
      items.push({
        text: title,
        link: `${dir}/${fileName}`
      });
    }
  });

  // 如果文件夹有 index.md，将其作为文件夹的首页
  if (indexTitle) {
    items.unshift({
      text: indexTitle,
      link: `${dir}/index`
    });
  }

  return items;
}
