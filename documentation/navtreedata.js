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
      [ "Creating a World", "hello.html#autotoc_md21", null ],
      [ "Creating a Ground Box", "hello.html#autotoc_md22", null ],
      [ "Creating a Dynamic Body", "hello.html#autotoc_md23", null ],
      [ "Simulating the World", "hello.html#autotoc_md24", null ],
      [ "Cleanup", "hello.html#autotoc_md25", null ]
    ] ],
    [ "Samples", "samples.html", null ],
    [ "Foundations", "md_foundation.html", [
      [ "Assertions", "md_foundation.html#autotoc_md27", null ],
      [ "Allocation", "md_foundation.html#autotoc_md28", null ],
      [ "Version", "md_foundation.html#autotoc_md29", null ],
      [ "Vector Math", "md_foundation.html#autotoc_md30", null ],
      [ "Multithreading", "md_foundation.html#multi", null ]
    ] ],
    [ "Collision", "md_collision.html", [
      [ "Shape Primitives", "md_collision.html#autotoc_md32", [
        [ "Circles", "md_collision.html#autotoc_md33", null ],
        [ "Capsules", "md_collision.html#autotoc_md34", null ],
        [ "Polygons", "md_collision.html#autotoc_md35", null ],
        [ "Segments", "md_collision.html#autotoc_md36", null ],
        [ "Ghost Collisions", "md_collision.html#autotoc_md37", null ],
        [ "Chain segment", "md_collision.html#autotoc_md38", null ]
      ] ],
      [ "Geometric Queries", "md_collision.html#autotoc_md39", [
        [ "Shape Point Test", "md_collision.html#autotoc_md40", null ],
        [ "Ray Cast", "md_collision.html#autotoc_md41", null ],
        [ "Shape Cast", "md_collision.html#autotoc_md42", null ],
        [ "Distance", "md_collision.html#autotoc_md43", null ],
        [ "Time of Impact", "md_collision.html#autotoc_md44", null ],
        [ "Contact Manifolds", "md_collision.html#autotoc_md45", null ]
      ] ],
      [ "Dynamic Tree", "md_collision.html#autotoc_md46", null ]
    ] ],
    [ "Simulation", "md_simulation.html", [
      [ "Ids", "md_simulation.html#autotoc_md48", null ],
      [ "World", "md_simulation.html#autotoc_md49", [
        [ "World Definition", "md_simulation.html#autotoc_md50", null ],
        [ "World Lifetime", "md_simulation.html#autotoc_md51", null ],
        [ "Simulation", "md_simulation.html#autotoc_md52", null ]
      ] ],
      [ "Rigid Bodies", "md_simulation.html#autotoc_md53", [
        [ "Body types", "md_simulation.html#autotoc_md54", null ],
        [ "Body Definition", "md_simulation.html#autotoc_md55", null ],
        [ "Body Type", "md_simulation.html#autotoc_md56", null ],
        [ "Position and Angle", "md_simulation.html#autotoc_md57", null ],
        [ "Damping", "md_simulation.html#autotoc_md58", null ],
        [ "Gravity Scale", "md_simulation.html#autotoc_md59", null ],
        [ "Sleep Parameters", "md_simulation.html#autotoc_md60", null ],
        [ "Fixed Rotation", "md_simulation.html#autotoc_md61", null ],
        [ "Bullets", "md_simulation.html#bullets", null ],
        [ "Disabling", "md_simulation.html#autotoc_md62", null ],
        [ "User Data", "md_simulation.html#autotoc_md63", null ],
        [ "Body Lifetime", "md_simulation.html#autotoc_md64", null ],
        [ "Using a Body", "md_simulation.html#autotoc_md65", null ],
        [ "Mass Data", "md_simulation.html#autotoc_md66", null ],
        [ "State Information", "md_simulation.html#autotoc_md67", null ],
        [ "Position and Velocity", "md_simulation.html#autotoc_md68", null ],
        [ "Forces and Impulses", "md_simulation.html#autotoc_md69", null ],
        [ "Coordinate Transformations", "md_simulation.html#autotoc_md70", null ],
        [ "Accessing Shapes and Joints", "md_simulation.html#autotoc_md71", null ],
        [ "Body Events", "md_simulation.html#autotoc_md72", null ]
      ] ],
      [ "Shapes", "md_simulation.html#autotoc_md73", [
        [ "Shape Lifetime", "md_simulation.html#autotoc_md74", null ],
        [ "Density", "md_simulation.html#autotoc_md75", null ],
        [ "Friction", "md_simulation.html#autotoc_md76", null ],
        [ "Restitution", "md_simulation.html#autotoc_md77", null ],
        [ "Filtering", "md_simulation.html#filtering", null ],
        [ "Chain Shapes", "md_simulation.html#autotoc_md78", null ],
        [ "Sensors", "md_simulation.html#autotoc_md79", null ]
      ] ],
      [ "Contacts", "md_simulation.html#autotoc_md80", [
        [ "Terminology", "md_simulation.html#autotoc_md81", [
          [ "contact point", "md_simulation.html#autotoc_md82", null ],
          [ "contact normal", "md_simulation.html#autotoc_md83", null ],
          [ "contact separation", "md_simulation.html#autotoc_md84", null ],
          [ "contact manifold", "md_simulation.html#autotoc_md85", null ],
          [ "normal impulse", "md_simulation.html#autotoc_md86", null ],
          [ "tangent impulse", "md_simulation.html#autotoc_md87", null ],
          [ "contact point id", "md_simulation.html#autotoc_md88", null ],
          [ "speculative contact", "md_simulation.html#autotoc_md89", null ]
        ] ],
        [ "Contact Lifetime", "md_simulation.html#autotoc_md90", null ],
        [ "Contact Data", "md_simulation.html#autotoc_md91", null ],
        [ "Sensor Events", "md_simulation.html#autotoc_md92", null ],
        [ "Contact Events", "md_simulation.html#autotoc_md93", [
          [ "Contact Touch Event", "md_simulation.html#autotoc_md94", null ],
          [ "Hit Events", "md_simulation.html#autotoc_md95", null ]
        ] ],
        [ "Contact Filtering", "md_simulation.html#autotoc_md96", null ],
        [ "Advanced Contact Handling", "md_simulation.html#autotoc_md97", [
          [ "Custom Filtering Callback", "md_simulation.html#autotoc_md98", null ],
          [ "Pre-Solve Callback", "md_simulation.html#autotoc_md99", null ]
        ] ]
      ] ],
      [ "Joints", "md_simulation.html#autotoc_md100", [
        [ "Joint Definition", "md_simulation.html#autotoc_md101", null ],
        [ "Joint Lifetime", "md_simulation.html#autotoc_md102", null ],
        [ "Using Joints", "md_simulation.html#autotoc_md103", null ],
        [ "Distance Joint", "md_simulation.html#autotoc_md104", null ],
        [ "Revolute Joint", "md_simulation.html#autotoc_md105", null ],
        [ "Prismatic Joint", "md_simulation.html#autotoc_md106", null ],
        [ "Mouse Joint", "md_simulation.html#autotoc_md107", null ],
        [ "Weld Joint", "md_simulation.html#autotoc_md108", null ],
        [ "Motor Joint", "md_simulation.html#autotoc_md109", null ],
        [ "Wheel Joint", "md_simulation.html#autotoc_md110", null ]
      ] ],
      [ "Spatial Queries", "md_simulation.html#spatial", [
        [ "Overlap Queries", "md_simulation.html#autotoc_md111", [
          [ "Query Filtering", "md_simulation.html#autotoc_md112", null ],
          [ "AABB Overlap", "md_simulation.html#autotoc_md113", null ],
          [ "Shape Overlap", "md_simulation.html#autotoc_md114", null ]
        ] ],
        [ "Ray-casts", "md_simulation.html#autotoc_md115", null ],
        [ "Shape-casts", "md_simulation.html#autotoc_md116", null ]
      ] ]
    ] ],
    [ "Loose Ends", "md_loose__ends.html", [
      [ "User Data", "md_loose__ends.html#autotoc_md118", null ],
      [ "Pixels and Coordinate Systems", "md_loose__ends.html#autotoc_md119", null ],
      [ "Debug Drawing", "md_loose__ends.html#autotoc_md120", null ],
      [ "Limitations", "md_loose__ends.html#autotoc_md121", null ]
    ] ],
    [ "Further Reading", "md_reading.html", null ],
    [ "FAQ", "md_faq.html", [
      [ "What is Box2D?", "md_faq.html#autotoc_md124", null ],
      [ "What platforms does Box2D support?", "md_faq.html#autotoc_md125", null ],
      [ "Who makes it?", "md_faq.html#autotoc_md126", null ],
      [ "How do I get help?", "md_faq.html#autotoc_md127", null ],
      [ "Documentation", "md_faq.html#autotoc_md128", [
        [ "Why isn't a feature documented?", "md_faq.html#autotoc_md129", null ]
      ] ],
      [ "Prerequisites", "md_faq.html#autotoc_md130", [
        [ "Programming", "md_faq.html#autotoc_md131", null ],
        [ "Math and Physics", "md_faq.html#autotoc_md132", null ]
      ] ],
      [ "API", "md_faq.html#autotoc_md133", [
        [ "What units does Box2D use?", "md_faq.html#autotoc_md134", null ],
        [ "How do I convert pixels to meters?", "md_faq.html#autotoc_md135", null ],
        [ "Why don't you use this awesome language?", "md_faq.html#autotoc_md136", null ],
        [ "Can I use Box2D in a DLL?", "md_faq.html#autotoc_md137", null ],
        [ "Is Box2D thread-safe?", "md_faq.html#autotoc_md138", null ]
      ] ],
      [ "Build Issues", "md_faq.html#autotoc_md139", [
        [ "Why doesn't my code compile and/or link?", "md_faq.html#autotoc_md140", null ]
      ] ],
      [ "Rendering", "md_faq.html#autotoc_md141", [
        [ "What are Box2D's rendering capabilities?", "md_faq.html#autotoc_md142", null ],
        [ "But the samples application draws stuff", "md_faq.html#autotoc_md143", null ],
        [ "How do I draw shapes?", "md_faq.html#autotoc_md144", null ]
      ] ],
      [ "Accuracy", "md_faq.html#autotoc_md145", null ],
      [ "Making Games", "md_faq.html#autotoc_md146", [
        [ "Worms Clones", "md_faq.html#autotoc_md147", null ],
        [ "Tile Based Environment", "md_faq.html#autotoc_md148", null ],
        [ "Asteroid Type Coordinate Systems", "md_faq.html#autotoc_md149", null ]
      ] ],
      [ "Determinism", "md_faq.html#autotoc_md150", [
        [ "Is Box2D deterministic?", "md_faq.html#autotoc_md151", null ],
        [ "But I really want determinism", "md_faq.html#autotoc_md152", null ]
      ] ],
      [ "What are the common mistakes made by new users?", "md_faq.html#autotoc_md153", null ]
    ] ],
    [ "Migration Guide", "md_migration.html", [
      [ "Version 2.4 to Version 3.0", "md_migration.html#autotoc_md155", [
        [ "Creating a world", "md_migration.html#autotoc_md156", null ],
        [ "Creating a body", "md_migration.html#autotoc_md157", null ],
        [ "Creating a shape", "md_migration.html#autotoc_md158", null ],
        [ "Chains", "md_migration.html#autotoc_md159", null ],
        [ "Creating a joint", "md_migration.html#autotoc_md160", null ],
        [ "New solver", "md_migration.html#autotoc_md161", null ],
        [ "Contact data", "md_migration.html#autotoc_md162", null ],
        [ "Sensors", "md_migration.html#autotoc_md163", null ],
        [ "Queries", "md_migration.html#autotoc_md164", null ],
        [ "World iteration", "md_migration.html#autotoc_md165", null ],
        [ "Library configuration", "md_migration.html#autotoc_md166", null ]
      ] ]
    ] ],
    [ "Reference", "topics.html", "topics" ],
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
"group__distance__joint.html#a001acbbd67326ab5e5d5ec6dc64faf78",
"group__math.html#structb2_transform",
"group__tree.html#ga7a44b407df8b53f0e95753ae0da43af6",
"md_loose__ends.html#autotoc_md121"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';