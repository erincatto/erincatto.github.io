/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Box2D", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "Hello Box2D", "hello.html", [
      [ "Creating a world", "hello.html#autotoc_md9", null ],
      [ "Creating a ground box", "hello.html#autotoc_md10", null ],
      [ "Creating a dynamic body", "hello.html#autotoc_md11", null ],
      [ "Simulating the world", "hello.html#autotoc_md12", null ],
      [ "Cleanup", "hello.html#autotoc_md13", null ]
    ] ],
    [ "Samples", "samples_app.html", null ],
    [ "Foundations", "md_foundation.html", [
      [ "Assertions", "md_foundation.html#autotoc_md15", null ],
      [ "Allocation", "md_foundation.html#autotoc_md16", null ],
      [ "Logging", "md_foundation.html#autotoc_md17", null ],
      [ "Version", "md_foundation.html#autotoc_md18", null ],
      [ "Compile time configuration", "md_foundation.html#autotoc_md19", null ],
      [ "Vector math", "md_foundation.html#autotoc_md20", null ],
      [ "Multithreading", "md_foundation.html#multi", null ],
      [ "Multithreading multiple worlds", "md_foundation.html#autotoc_md21", null ],
      [ "SIMD", "md_foundation.html#autotoc_md22", null ]
    ] ],
    [ "Collision", "md_collision.html", [
      [ "Shape primitives", "md_collision.html#autotoc_md24", null ],
      [ "Geometric queries", "md_collision.html#autotoc_md25", null ],
      [ "Dynamic tree", "md_collision.html#autotoc_md26", null ]
    ] ],
    [ "Simulation", "md_simulation.html", [
      [ "Ids", "md_simulation.html#autotoc_md28", null ],
      [ "World", "md_simulation.html#autotoc_md29", null ],
      [ "Rigid bodies", "md_simulation.html#autotoc_md30", [
        [ "Bullets", "md_simulation.html#bullets", null ]
      ] ],
      [ "Shapes", "md_simulation.html#autotoc_md31", [
        [ "Filtering", "md_simulation.html#filtering", null ]
      ] ],
      [ "Contacts", "md_simulation.html#autotoc_md32", null ],
      [ "Joints", "md_simulation.html#autotoc_md33", null ],
      [ "Spatial queries", "md_simulation.html#spatial", null ],
      [ "Simulation loop", "md_simulation.html#autotoc_md34", null ],
      [ "Determinism", "md_simulation.html#autotoc_md35", null ]
    ] ],
    [ "Loose Ends", "md_loose__ends.html", [
      [ "User data", "md_loose__ends.html#autotoc_md37", null ],
      [ "Pixels and coordinate systems", "md_loose__ends.html#autotoc_md38", null ],
      [ "Debug drawing", "md_loose__ends.html#autotoc_md39", null ],
      [ "Limitations", "md_loose__ends.html#autotoc_md40", null ]
    ] ],
    [ "Recording and Replay", "recording.html", [
      [ "Recording", "recording.html#autotoc_md41", null ],
      [ "Snapshots", "recording.html#snapshot", null ],
      [ "Viewing a recording", "recording.html#autotoc_md42", null ],
      [ "Determinism", "recording.html#autotoc_md43", null ],
      [ "Spatial queries", "recording.html#autotoc_md44", null ],
      [ "Limitations", "recording.html#autotoc_md45", null ]
    ] ],
    [ "Large Worlds", "large-worlds.html", [
      [ "Enabling large world support", "large-worlds.html#autotoc_md46", null ],
      [ "Double-precision math", "large-worlds.html#autotoc_md47", null ],
      [ "Operating range", "large-worlds.html#autotoc_md48", null ],
      [ "Query origins", "large-worlds.html#autotoc_md49", null ],
      [ "Recordings and snapshots", "large-worlds.html#autotoc_md50", null ]
    ] ],
    [ "Character Mover", "md_character.html", [
      [ "Geometric mover", "md_character.html#autotoc_md52", null ],
      [ "Dynamic mover", "md_character.html#autotoc_md53", null ],
      [ "Choosing a mover", "md_character.html#autotoc_md54", null ]
    ] ],
    [ "Further Reading", "md_reading.html", null ],
    [ "FAQ", "md_questions.html", [
      [ "What is Box2D?", "md_questions.html#autotoc_md57", null ],
      [ "Platforms support", "md_questions.html#autotoc_md58", null ],
      [ "Who makes it?", "md_questions.html#autotoc_md59", null ],
      [ "How do I get help?", "md_questions.html#autotoc_md60", null ],
      [ "Documentation", "md_questions.html#autotoc_md61", null ],
      [ "Prerequisites", "md_questions.html#autotoc_md62", null ],
      [ "API", "md_questions.html#autotoc_md63", null ],
      [ "Build issues", "md_questions.html#autotoc_md64", null ],
      [ "Rendering", "md_questions.html#autotoc_md65", null ],
      [ "Accuracy", "md_questions.html#autotoc_md66", null ],
      [ "Making games", "md_questions.html#autotoc_md67", null ],
      [ "Determinism", "md_questions.html#autotoc_md68", null ],
      [ "Common mistakes", "md_questions.html#autotoc_md69", null ]
    ] ],
    [ "v3.2 Release Notes", "md_release__notes__v320.html", [
      [ "API changes", "md_release__notes__v320.html#autotoc_md71", null ],
      [ "New features", "md_release__notes__v320.html#autotoc_md72", null ],
      [ "Improvements", "md_release__notes__v320.html#autotoc_md73", null ],
      [ "Infrastructure", "md_release__notes__v320.html#autotoc_md74", null ],
      [ "Breaking changes", "md_release__notes__v320.html#autotoc_md75", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"group__collision.html#ga869326681a76eeca8ebb020efce18c1b",
"group__geometry.html#ga65226d243e69e3c253d7e3f37644bbbf",
"group__mover__joint.html#ab5ea67b7b3aa663474453a4cef5639c7",
"group__shape.html#gga7ee22c73413d850c0937526938f92ff2a56796d9c2e6dcd59d781e20f9a50c923",
"index.html#autotoc_md7"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';