import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  const { filename } = await params;
  const decodedFilename = decodeURIComponent(filename);
  const baseDir = path.resolve(process.cwd(), "..", "ILLUSTRATED IMAGES");
  const filePath = path.join(baseDir, decodedFilename);

  // Security check: ensure path traversal is prevented
  if (!filePath.startsWith(baseDir)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const fileBuffer = await fs.promises.readFile(filePath);
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Image not found", { status: 404 });
  }
}
