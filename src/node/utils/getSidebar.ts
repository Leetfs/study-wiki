import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // 用于解析 Markdown 文件中的 Frontmatter

// 定义 Sidebar 项的类型
interface SidebarItem {
  text: string;      // 侧边栏显示的名称
  link?: string;     // 侧边栏项的链接
  collapsed?: boolean; // 是否折叠该项，默认 false 表示不折叠
  items?: SidebarItem[]; // 子项（嵌套的子目录或子文件）
  priority?: number;   // 优先级字段，数字越小，优先级越高
}

// 动态生成侧边栏的函数，接收目录路径作为参数
export function getSidebar(dir: string): SidebarItem[] {
  // 将相对路径转换为绝对路径
  const fullPath = path.resolve(__dirname, '../../../docs/zh', dir);

  // 检查目录是否存在，不存在则返回空数组
  if (!fs.existsSync(fullPath)) {
    console.error(`目录 ${fullPath} 不存在`);
    return [];
  }

  // 读取目录中的所有文件和子目录
  const files = fs.readdirSync(fullPath);
  let items: SidebarItem[] = [];

  // 遍历目录中的每个文件或子目录
  files.forEach(file => {
    const filePath = path.join(fullPath, file); // 文件的完整路径
    const stat = fs.statSync(filePath); // 获取文件的状态（是文件还是目录）

    if (stat.isDirectory()) {
      // 如果是目录，则递归处理子目录的内容
      const subDirItems = getSidebar(path.join(dir, file)); // 递归调用处理子目录

      const indexFilePath = path.join(filePath, 'index.md'); // 检查该目录是否包含 index.md 文件
      if (fs.existsSync(indexFilePath)) {
        // 如果存在 index.md 文件，解析其 Frontmatter 中的 title 和 priority
        const fileContent = fs.readFileSync(indexFilePath, 'utf-8'); // 读取文件内容
        const { data } = matter(fileContent); // 解析 Frontmatter
        const folderTitle = data.title || file; // 使用 Frontmatter 中的 title 或文件夹名作为显示名称
        const priority = data.priority || 100; // 如果没有设置优先级，默认为 100

        // 将文件夹及其子目录添加到侧边栏
        items.push({
          text: folderTitle,  // 文件夹的显示名称
          collapsed: false,   // 文件夹默认不折叠
          items: subDirItems, // 文件夹中的子项
          priority            // 文件夹的优先级
        });
      }
    } else if (file === 'index.md') {
      // 处理文件夹的 index.md 文件，将其作为文件夹的首页
      const fileContent = fs.readFileSync(filePath, 'utf-8'); // 读取 index.md 内容
      const { data } = matter(fileContent); // 解析 Frontmatter
      const title = data.title || '首页'; // 使用 Frontmatter 中的 title，若无则使用 '首页'
      const priority = data.priority || 100; // 默认优先级 100

      // 将 index.md 文件作为文件夹的首页
      items.push({
        text: title,          // 显示名称
        link: `${dir}/index`, // 文件的相对路径链接
        priority              // 文件的优先级
      });
    } else if (file.endsWith('.md')) {
      // 处理目录中的其他 .md 文件（非 index.md 文件）
      const fileName = file.replace('.md', ''); // 去除文件扩展名，保留文件名
      const fileContent = fs.readFileSync(filePath, 'utf-8'); // 读取文件内容
      const { data } = matter(fileContent); // 解析 Frontmatter
      const title = data.title || fileName; // 使用 Frontmatter 中的 title 或文件名
      const priority = data.priority || 100; // 默认优先级 100

      // 将文件添加到侧边栏
      items.push({
        text: title,          // 显示名称
        link: `${dir}/${fileName}`, // 文件的相对路径链接
        priority              // 文件的优先级
      });
    }
  });

  // 根据 priority 字段对 items 进行排序，优先级高的文件（数字小）排在前面
  return items.sort((a, b) => (a.priority || 100) - (b.priority || 100));
}
