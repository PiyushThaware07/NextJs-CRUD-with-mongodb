import { NextResponse } from "next/server";
// & MONGODB
import "../../db/dbConnection";
import UserModel from "../../db/model/UserModel";

export async function PUT(request, content) {
    const id = content.params.id;
    const payload = await request.json();
    const updateData = await UserModel.updateOne(
        { _id: id },
        { $set: payload }
    )
    return NextResponse.json({
        success: true,
        data: updateData
    }, { status: 200 });
}


export async function DELETE(request, content) {
    const id = content.params.id;
    console.log("ID >> ", id);
    const deleteData = await UserModel.deleteOne({ _id: id })
    console.log(deleteData)
    return NextResponse.json({
        success: true,
        data: deleteData
    }, { status: 200 });
}




// API FOR SIGNLE USER
export async function GET(request, content) {
    const id = content.params.id;
    const data = await UserModel.findOne({ _id: id });
    console.log(data);
    return NextResponse.json({
        success: true,
        data: data
    }, { status: 200 });
}