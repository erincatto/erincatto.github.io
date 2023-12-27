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
  [ "box2d", "index.html", [
    [ "Overview (NOT UPDATED for Box2D version 3.0)", "index.html", "index" ],
    [ "Hello Box2D (NOT UPDATED for Box2D version 3.0)", "md_hello.html", [
      [ "Creating a World", "md_hello.html#autotoc_md21", null ],
      [ "Creating a Ground Box", "md_hello.html#autotoc_md22", null ],
      [ "Creating a Dynamic Body", "md_hello.html#autotoc_md23", null ],
      [ "Simulating the World", "md_hello.html#autotoc_md24", null ],
      [ "Cleanup", "md_hello.html#autotoc_md25", null ]
    ] ],
    [ "Testbed (NOT UPDATED for Box2D version 3.0)", "md_testbed.html", null ],
    [ "Common Module (NOT UPDATED for Box2D version 3.0)", "md_common.html", [
      [ "Settings", "md_common.html#autotoc_md28", [
        [ "Types", "md_common.html#autotoc_md29", null ],
        [ "Constants", "md_common.html#autotoc_md30", null ],
        [ "Allocation wrappers", "md_common.html#autotoc_md31", null ],
        [ "Version", "md_common.html#autotoc_md32", null ]
      ] ],
      [ "Memory Management", "md_common.html#autotoc_md33", null ],
      [ "Math", "md_common.html#autotoc_md34", null ]
    ] ],
    [ "Collision Module (NOT UPDATED for Box2D version 3.0)", "md_collision.html", [
      [ "Shapes", "md_collision.html#autotoc_md36", [
        [ "Circle Shapes", "md_collision.html#autotoc_md37", null ],
        [ "Polygon Shapes", "md_collision.html#autotoc_md38", null ],
        [ "Edge Shapes", "md_collision.html#autotoc_md39", null ],
        [ "Chain Shapes", "md_collision.html#autotoc_md40", null ]
      ] ],
      [ "Geometric Queries", "md_collision.html#autotoc_md41", [
        [ "Shape Point Test", "md_collision.html#autotoc_md42", null ],
        [ "Shape Ray Cast", "md_collision.html#autotoc_md43", null ]
      ] ],
      [ "Pairwise Functions", "md_collision.html#autotoc_md44", [
        [ "Overlap", "md_collision.html#autotoc_md45", null ],
        [ "Contact Manifolds", "md_collision.html#autotoc_md46", null ],
        [ "Distance", "md_collision.html#autotoc_md47", null ],
        [ "Time of Impact", "md_collision.html#autotoc_md48", null ]
      ] ],
      [ "Dynamic Tree", "md_collision.html#autotoc_md49", null ],
      [ "Broad-phase", "md_collision.html#autotoc_md50", null ]
    ] ],
    [ "Dynamics Module (NOT UPDATED for Box2D version 3.0)", "md_dynamics.html", [
      [ "Bodies", "md_dynamics.html#autotoc_md52", [
        [ "Body types", "md_dynamics.html#autotoc_md53", [
          [ "b2_staticBody", "md_dynamics.html#autotoc_md54", null ],
          [ "b2_kinematicBody", "md_dynamics.html#autotoc_md55", null ],
          [ "b2_dynamicBody", "md_dynamics.html#autotoc_md56", null ]
        ] ],
        [ "Body Definition", "md_dynamics.html#autotoc_md57", null ],
        [ "Body Type", "md_dynamics.html#autotoc_md58", null ],
        [ "Position and Angle", "md_dynamics.html#autotoc_md59", null ],
        [ "Damping", "md_dynamics.html#autotoc_md60", null ],
        [ "Gravity Scale", "md_dynamics.html#autotoc_md61", null ],
        [ "Sleep Parameters", "md_dynamics.html#autotoc_md62", null ],
        [ "Fixed Rotation", "md_dynamics.html#autotoc_md63", null ],
        [ "Bullets", "md_dynamics.html#autotoc_md64", null ],
        [ "Activation", "md_dynamics.html#autotoc_md65", null ],
        [ "User Data", "md_dynamics.html#autotoc_md66", null ],
        [ "Body Factory", "md_dynamics.html#autotoc_md67", null ],
        [ "Using a Body", "md_dynamics.html#autotoc_md68", null ],
        [ "Mass Data", "md_dynamics.html#autotoc_md69", null ],
        [ "State Information", "md_dynamics.html#autotoc_md70", null ],
        [ "Position and Velocity", "md_dynamics.html#autotoc_md71", null ],
        [ "Forces and Impulses", "md_dynamics.html#autotoc_md72", null ],
        [ "Coordinate Transformations", "md_dynamics.html#autotoc_md73", null ],
        [ "Acessing Fixtures, Joints, and Contacts", "md_dynamics.html#autotoc_md74", null ]
      ] ],
      [ "Fixtures", "md_dynamics.html#autotoc_md75", [
        [ "Fixture Creation", "md_dynamics.html#autotoc_md76", null ],
        [ "Density", "md_dynamics.html#autotoc_md77", null ],
        [ "Friction", "md_dynamics.html#autotoc_md78", null ],
        [ "Restitution", "md_dynamics.html#autotoc_md79", null ],
        [ "Filtering", "md_dynamics.html#autotoc_md80", null ],
        [ "Sensors", "md_dynamics.html#autotoc_md81", null ]
      ] ],
      [ "Joints", "md_dynamics.html#autotoc_md82", [
        [ "Joint Definition", "md_dynamics.html#autotoc_md83", null ],
        [ "Joint Factory", "md_dynamics.html#autotoc_md84", null ],
        [ "Using Joints", "md_dynamics.html#autotoc_md85", null ],
        [ "Distance Joint", "md_dynamics.html#autotoc_md86", null ],
        [ "Revolute Joint", "md_dynamics.html#autotoc_md87", null ],
        [ "Prismatic Joint", "md_dynamics.html#autotoc_md88", null ],
        [ "Pulley Joint", "md_dynamics.html#autotoc_md89", null ],
        [ "Gear Joint", "md_dynamics.html#autotoc_md90", null ],
        [ "Mouse Joint", "md_dynamics.html#autotoc_md91", null ],
        [ "Wheel Joint", "md_dynamics.html#autotoc_md92", null ],
        [ "Weld Joint", "md_dynamics.html#autotoc_md93", null ],
        [ "Friction Joint", "md_dynamics.html#autotoc_md94", null ],
        [ "Motor Joint", "md_dynamics.html#autotoc_md95", null ],
        [ "Wheel Joint", "md_dynamics.html#autotoc_md96", null ]
      ] ],
      [ "Contacts", "md_dynamics.html#autotoc_md97", [
        [ "Contact Class", "md_dynamics.html#autotoc_md105", null ],
        [ "Accessing Contacts", "md_dynamics.html#autotoc_md106", null ],
        [ "Contact Listener", "md_dynamics.html#autotoc_md107", [
          [ "Begin Contact Event", "md_dynamics.html#autotoc_md108", null ],
          [ "End Contact Event", "md_dynamics.html#autotoc_md109", null ],
          [ "Pre-Solve Event", "md_dynamics.html#autotoc_md110", null ],
          [ "Post-Solve Event", "md_dynamics.html#autotoc_md111", null ]
        ] ],
        [ "Contact Filtering", "md_dynamics.html#autotoc_md112", null ]
      ] ],
      [ "World", "md_dynamics.html#autotoc_md113", [
        [ "Creating and Destroying a World", "md_dynamics.html#autotoc_md114", null ],
        [ "Using a World", "md_dynamics.html#autotoc_md115", null ],
        [ "Simulation", "md_dynamics.html#autotoc_md116", null ],
        [ "Exploring the World", "md_dynamics.html#autotoc_md117", null ],
        [ "AABB Queries", "md_dynamics.html#autotoc_md118", null ],
        [ "Ray Casts", "md_dynamics.html#autotoc_md119", null ]
      ] ]
    ] ],
    [ "Loose Ends (NOT UPDATED for Box2D version 3.0)", "md_loose__ends.html", [
      [ "User Data", "md_loose__ends.html#autotoc_md121", null ],
      [ "Custom User Data", "md_loose__ends.html#autotoc_md122", null ],
      [ "Implicit Destruction", "md_loose__ends.html#autotoc_md123", null ],
      [ "Pixels and Coordinate Systems", "md_loose__ends.html#autotoc_md124", null ],
      [ "Debug Drawing", "md_loose__ends.html#autotoc_md125", null ],
      [ "Limitations", "md_loose__ends.html#autotoc_md126", null ]
    ] ],
    [ "References", "md_references.html", null ],
    [ "FAQ (NOT UPDATED for Box2D version 3.0)", "md__f_a_q.html", [
      [ "What is Box2D?", "md__f_a_q.html#autotoc_md129", null ],
      [ "What platforms does Box2D support?", "md__f_a_q.html#autotoc_md130", null ],
      [ "Who makes it?", "md__f_a_q.html#autotoc_md131", null ],
      [ "How do I get help?", "md__f_a_q.html#autotoc_md132", null ],
      [ "Documentation", "md__f_a_q.html#autotoc_md133", [
        [ "Why isn't feature foo documented?", "md__f_a_q.html#autotoc_md134", null ]
      ] ],
      [ "Prerequisites", "md__f_a_q.html#autotoc_md135", [
        [ "Programming", "md__f_a_q.html#autotoc_md136", null ],
        [ "Math and Physics", "md__f_a_q.html#autotoc_md137", null ]
      ] ],
      [ "API", "md__f_a_q.html#autotoc_md138", [
        [ "What units does Box2D use?", "md__f_a_q.html#autotoc_md139", null ],
        [ "How do I convert pixels to meters?", "md__f_a_q.html#autotoc_md140", null ],
        [ "Why don't you use this awesome C++ feature?", "md__f_a_q.html#autotoc_md141", null ],
        [ "Can I use Box2D in a DLL?", "md__f_a_q.html#autotoc_md142", null ],
        [ "Is Box2D thread-safe?", "md__f_a_q.html#autotoc_md143", null ]
      ] ],
      [ "Build Issues", "md__f_a_q.html#autotoc_md144", [
        [ "Why doesn't my code compile and/or link?", "md__f_a_q.html#autotoc_md145", null ]
      ] ],
      [ "Rendering", "md__f_a_q.html#autotoc_md146", [
        [ "What are Box2D's rendering capabilities?", "md__f_a_q.html#autotoc_md147", null ],
        [ "But the Testbed draws stuff", "md__f_a_q.html#autotoc_md148", null ],
        [ "How do I draw shapes?", "md__f_a_q.html#autotoc_md149", null ]
      ] ],
      [ "Accuracy", "md__f_a_q.html#autotoc_md150", null ],
      [ "Making Games", "md__f_a_q.html#autotoc_md151", [
        [ "Worms Clones", "md__f_a_q.html#autotoc_md152", null ],
        [ "Tile Based Environment", "md__f_a_q.html#autotoc_md153", null ],
        [ "Asteroid Type Coordinate Systems", "md__f_a_q.html#autotoc_md154", null ]
      ] ],
      [ "Determinism", "md__f_a_q.html#autotoc_md155", [
        [ "Is Box2D deterministic?", "md__f_a_q.html#autotoc_md156", null ],
        [ "But I really want determinism", "md__f_a_q.html#autotoc_md157", null ]
      ] ],
      [ "Why is the restitution/friction mixing inaccurate?", "md__f_a_q.html#autotoc_md158", null ],
      [ "What are the biggest mistakes made by new users?", "md__f_a_q.html#autotoc_md159", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"md_common.html#autotoc_md32"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';