import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get("file");
        if (!file) {
            return NextResponse.json({
                success: false,
                data: "No Image Found"
            }, { status: 500 });
        } else {
            // Convert the image into buffer
            const byteData = await file.arrayBuffer();
            const buffer = Buffer.from(byteData);
            const path = `./public/${file.name}`;
            await writeFile(path, buffer);
            return NextResponse.json({
                success: true,
                data: "Image Upload Successfully"
            }, { status: 200 });
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        return NextResponse.json({
            success: false,
            data: "Error Uploading Image"
        }, { status: 500 });
    }
}
