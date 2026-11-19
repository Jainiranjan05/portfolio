import fs from "node:fs";
import path from "node:path";
import Behaviors from "../components/Behaviors";
export default function Home() {
  const html = fs.readFileSync(path.join(process.cwd(), "content.html"), "utf8");
  return (<><div dangerouslySetInnerHTML={{ __html: html }} /><Behaviors /></>);
}
