const { NextResponse } = require("next/server");
// & MONGODB
import "../db/dbConnection"
import UserModel from "../db/model/UserModel";

export async function GET() {
    const data = await UserModel.find();
    console.log("API : ", data);
    return NextResponse.json({
        success: true,
        data: data
    }, { status: 200 })
}


export async function POST(request, response) {
    const newData = await request.json();
    const savedData = await UserModel(newData).save();
    return NextResponse.json({
        success: true,
        data: savedData
    }, { status: 200 })
}