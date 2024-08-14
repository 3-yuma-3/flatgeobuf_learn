// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ColumnType } from '../flat-geobuf/column-type.js';


export class Column {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Column {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsColumn(bb:flatbuffers.ByteBuffer, obj?:Column):Column {
  return (obj || new Column()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsColumn(bb:flatbuffers.ByteBuffer, obj?:Column):Column {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Column()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

type():ColumnType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ColumnType.Byte;
}

title():string|null
title(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
title(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

description():string|null
description(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
description(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

width():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : -1;
}

precision():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : -1;
}

scale():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : -1;
}

nullable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

unique():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

primaryKey():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

metadata():string|null
metadata(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
metadata(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startColumn(builder:flatbuffers.Builder) {
  builder.startObject(11);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addType(builder:flatbuffers.Builder, type:ColumnType) {
  builder.addFieldInt8(1, type, ColumnType.Byte);
}

static addTitle(builder:flatbuffers.Builder, titleOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, titleOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, descriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, descriptionOffset, 0);
}

static addWidth(builder:flatbuffers.Builder, width:number) {
  builder.addFieldInt32(4, width, -1);
}

static addPrecision(builder:flatbuffers.Builder, precision:number) {
  builder.addFieldInt32(5, precision, -1);
}

static addScale(builder:flatbuffers.Builder, scale:number) {
  builder.addFieldInt32(6, scale, -1);
}

static addNullable(builder:flatbuffers.Builder, nullable:boolean) {
  builder.addFieldInt8(7, +nullable, +true);
}

static addUnique(builder:flatbuffers.Builder, unique:boolean) {
  builder.addFieldInt8(8, +unique, +false);
}

static addPrimaryKey(builder:flatbuffers.Builder, primaryKey:boolean) {
  builder.addFieldInt8(9, +primaryKey, +false);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, metadataOffset, 0);
}

static endColumn(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // name
  return offset;
}

static createColumn(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, type:ColumnType, titleOffset:flatbuffers.Offset, descriptionOffset:flatbuffers.Offset, width:number, precision:number, scale:number, nullable:boolean, unique:boolean, primaryKey:boolean, metadataOffset:flatbuffers.Offset):flatbuffers.Offset {
  Column.startColumn(builder);
  Column.addName(builder, nameOffset);
  Column.addType(builder, type);
  Column.addTitle(builder, titleOffset);
  Column.addDescription(builder, descriptionOffset);
  Column.addWidth(builder, width);
  Column.addPrecision(builder, precision);
  Column.addScale(builder, scale);
  Column.addNullable(builder, nullable);
  Column.addUnique(builder, unique);
  Column.addPrimaryKey(builder, primaryKey);
  Column.addMetadata(builder, metadataOffset);
  return Column.endColumn(builder);
}
}
