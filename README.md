# flatgeobuf

[![CircleCI](https://circleci.com/gh/bjornharrtell/flatgeobuf.svg?style=svg)](https://circleci.com/gh/bjornharrtell/flatgeobuf)

A performant binary encoding for geographic data based on [flatbuffers](http://google.github.io/flatbuffers/) that can hold a collection of [Simple Features](https://en.wikipedia.org/wiki/Simple_Features).

Inspired by [geobuf](https://github.com/mapbox/geobuf) and [flatbush](https://github.com/mourner/flatbush). Deliberately does not support random writes for simplicity and to be able to cluster the data on a [packed Hilbert R-Tree](https://en.wikipedia.org/wiki/Hilbert_R-tree#Packed_Hilbert_R-trees).

The goal is to be suitable for large volumes of static data and significantly faster than legacy formats without size limitations for contents or metainformation.

## Specification

![layout](layout.svg "FlatGeobuf file layout")

* MB: Magic bytes (0x66676200)
* H: Header (variable size [flatbuffer](https://github.com/bjornharrtell/flatgeobuf/blob/master/src/fbs/flatgeobuf.fbs))
* I+O (optional): Static packed Hilbert R-tree index (static size [custom buffer](https://github.com/bjornharrtell/flatgeobuf/blob/master/src/cpp/packedrtree.h)) and feature offsets index (static size custom buffer, feature count * 8 bytes)
* DATA: Features (variable size [flatbuffer](https://github.com/bjornharrtell/flatgeobuf/blob/master/src/fbs/feature.fbs)s)

DISCLAIMER: Unfinished work in progress.

## WIP

* Language support for JavaScript, TypeScript, C, C++, Java and C#
* Efficient I/O (streaming and random access)
* GDAL/OGR format (WIP @ https://github.com/bjornharrtell/gdal/tree/flatgeobuf)
* QGIS provider (WIP @ https://github.com/bjornharrtell/QGIS/tree/fgb)
* Complete test coverage

## TODO

* Spatial reference metainformation
* Feature offset smallest needed type
