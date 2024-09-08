import fs from 'fs';
import path from 'path';

// 定义 Sidebar 项的类型
interface SidebarItem {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItem[];
}

// 动态生成侧边栏的函数
export function getSidebar(dir: string): SidebarItem[] {
  const fullPath = path.resolve(__dirname, '../../../', dir); // 获取目录的绝对路径
  const files = fs.readdirSync(fullPath); // 读取目录中的文件和子目录

  // 遍历文件和目录，生成侧边栏结构
  return files
    .map(file => {
      const filePath = path.join(fullPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // 如果是目录，生成子目录的侧边栏，并添加 collapsed 属性
        return {
          text: file,
          collapsed: false, // 默认展开
          items: getSidebar(path.join(dir, file)) // 递归获取子目录
        };
      } else if (file.endsWith('.md')) {
        // 如果是 Markdown 文件，生成链接
        const fileName = file.replace('.md', '');
        return {
          text: fileName,
          link: `${dir}/${fileName}`
        };
      }
    })
    .filter(Boolean) as SidebarItem[]; // 过滤掉无效项（例如不是目录或 .md 文件的项）
}
