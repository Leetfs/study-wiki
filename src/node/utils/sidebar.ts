import fs from 'fs';
import path from 'path';

export function getSidebar(dir: string) {
  const fullPath = path.resolve(__dirname, '../', dir); // 根据相对路径调整
  const files = fs.readdirSync(fullPath);

  return files.map(file => {
    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      return {
        text: file,
        collapsible: true,
        items: getSidebar(path.join(dir, file)) // 递归处理子目录
      };
    } else if (file.endsWith('.md')) {
      const fileName = file.replace('.md', '');
      return { text: fileName, link: `${dir}/${fileName}` };
    }
  }).filter(Boolean); // 过滤无效值
}
