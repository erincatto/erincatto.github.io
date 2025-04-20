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
      [ "Multithreading", "md_foundation.html#multi", null ],
      [ "Multithreading Multiple Worlds", "md_foundation.html#autotoc_md31", null ]
    ] ],
    [ "Collision", "md_collision.html", [
      [ "Shape Primitives", "md_collision.html#autotoc_md33", [
        [ "Circles", "md_collision.html#autotoc_md34", null ],
        [ "Capsules", "md_collision.html#autotoc_md35", null ],
        [ "Polygons", "md_collision.html#autotoc_md36", null ],
        [ "Segments", "md_collision.html#autotoc_md37", null ],
        [ "Ghost Collisions", "md_collision.html#autotoc_md38", null ],
        [ "Chain segment", "md_collision.html#autotoc_md39", null ]
      ] ],
      [ "Geometric Queries", "md_collision.html#autotoc_md40", [
        [ "Shape Point Test", "md_collision.html#autotoc_md41", null ],
        [ "Ray Cast", "md_collision.html#autotoc_md42", null ],
        [ "Shape Cast", "md_collision.html#autotoc_md43", null ],
        [ "Distance", "md_collision.html#autotoc_md44", null ],
        [ "Time of Impact", "md_collision.html#autotoc_md45", null ],
        [ "Contact Manifolds", "md_collision.html#autotoc_md46", null ]
      ] ],
      [ "Dynamic Tree", "md_collision.html#autotoc_md47", null ]
    ] ],
    [ "Simulation", "md_simulation.html", [
      [ "Ids", "md_simulation.html#autotoc_md49", null ],
      [ "World", "md_simulation.html#autotoc_md50", [
        [ "World Definition", "md_simulation.html#autotoc_md51", null ],
        [ "World Lifetime", "md_simulation.html#autotoc_md52", null ],
        [ "Simulation", "md_simulation.html#autotoc_md53", null ]
      ] ],
      [ "Rigid Bodies", "md_simulation.html#autotoc_md54", [
        [ "Body types", "md_simulation.html#autotoc_md55", null ],
        [ "Body Definition", "md_simulation.html#autotoc_md56", null ],
        [ "Body Type", "md_simulation.html#autotoc_md57", null ],
        [ "Position and Angle", "md_simulation.html#autotoc_md58", null ],
        [ "Damping", "md_simulation.html#autotoc_md59", null ],
        [ "Gravity Scale", "md_simulation.html#autotoc_md60", null ],
        [ "Sleep Parameters", "md_simulation.html#autotoc_md61", null ],
        [ "Fixed Rotation", "md_simulation.html#autotoc_md62", null ],
        [ "Bullets", "md_simulation.html#bullets", null ],
        [ "Disabling", "md_simulation.html#autotoc_md63", null ],
        [ "User Data", "md_simulation.html#autotoc_md64", null ],
        [ "Body Lifetime", "md_simulation.html#autotoc_md65", null ],
        [ "Using a Body", "md_simulation.html#autotoc_md66", null ],
        [ "Mass Data", "md_simulation.html#autotoc_md67", null ],
        [ "State Information", "md_simulation.html#autotoc_md68", null ],
        [ "Position and Velocity", "md_simulation.html#autotoc_md69", null ],
        [ "Forces and Impulses", "md_simulation.html#autotoc_md70", null ],
        [ "Coordinate Transformations", "md_simulation.html#autotoc_md71", null ],
        [ "Accessing Shapes and Joints", "md_simulation.html#autotoc_md72", null ],
        [ "Body Events", "md_simulation.html#autotoc_md73", null ]
      ] ],
      [ "Shapes", "md_simulation.html#autotoc_md74", [
        [ "Shape Lifetime", "md_simulation.html#autotoc_md75", null ],
        [ "Density", "md_simulation.html#autotoc_md76", null ],
        [ "Friction", "md_simulation.html#autotoc_md77", null ],
        [ "Restitution", "md_simulation.html#autotoc_md78", null ],
        [ "Friction and restitution callbacks", "md_simulation.html#autotoc_md79", null ],
        [ "Filtering", "md_simulation.html#filtering", null ],
        [ "Chain Shapes", "md_simulation.html#autotoc_md80", null ],
        [ "Sensors", "md_simulation.html#autotoc_md81", null ],
        [ "Sensor Events", "md_simulation.html#autotoc_md82", null ]
      ] ],
      [ "Contacts", "md_simulation.html#autotoc_md83", [
        [ "Terminology", "md_simulation.html#autotoc_md84", [
          [ "contact point", "md_simulation.html#autotoc_md85", null ],
          [ "contact normal", "md_simulation.html#autotoc_md86", null ],
          [ "contact separation", "md_simulation.html#autotoc_md87", null ],
          [ "contact manifold", "md_simulation.html#autotoc_md88", null ],
          [ "normal impulse", "md_simulation.html#autotoc_md89", null ],
          [ "tangent impulse", "md_simulation.html#autotoc_md90", null ],
          [ "contact point id", "md_simulation.html#autotoc_md91", null ],
          [ "speculative contact", "md_simulation.html#autotoc_md92", null ]
        ] ],
        [ "Contact Lifetime", "md_simulation.html#autotoc_md93", null ],
        [ "Contact Data", "md_simulation.html#autotoc_md94", null ],
        [ "Contact Events", "md_simulation.html#autotoc_md95", [
          [ "Contact Touch Event", "md_simulation.html#autotoc_md96", null ],
          [ "Hit Events", "md_simulation.html#autotoc_md97", null ]
        ] ],
        [ "Contact Filtering", "md_simulation.html#autotoc_md98", null ],
        [ "Advanced Contact Handling", "md_simulation.html#autotoc_md99", [
          [ "Custom Filtering Callback", "md_simulation.html#autotoc_md100", null ],
          [ "Pre-Solve Callback", "md_simulation.html#autotoc_md101", null ]
        ] ]
      ] ],
      [ "Joints", "md_simulation.html#autotoc_md102", [
        [ "Joint Definition", "md_simulation.html#autotoc_md103", null ],
        [ "Joint Lifetime", "md_simulation.html#autotoc_md104", null ],
        [ "Using Joints", "md_simulation.html#autotoc_md105", null ],
        [ "Distance Joint", "md_simulation.html#autotoc_md106", null ],
        [ "Revolute Joint", "md_simulation.html#autotoc_md107", null ],
        [ "Prismatic Joint", "md_simulation.html#autotoc_md108", null ],
        [ "Mouse Joint", "md_simulation.html#autotoc_md109", null ],
        [ "Weld Joint", "md_simulation.html#autotoc_md110", null ],
        [ "Motor Joint", "md_simulation.html#autotoc_md111", null ],
        [ "Wheel Joint", "md_simulation.html#autotoc_md112", null ]
      ] ],
      [ "Spatial Queries", "md_simulation.html#spatial", [
        [ "Overlap Queries", "md_simulation.html#autotoc_md113", [
          [ "Query Filtering", "md_simulation.html#autotoc_md114", null ],
          [ "AABB Overlap", "md_simulation.html#autotoc_md115", null ],
          [ "Shape Overlap", "md_simulation.html#autotoc_md116", null ]
        ] ],
        [ "Ray-casts", "md_simulation.html#autotoc_md117", null ],
        [ "Shape-casts", "md_simulation.html#autotoc_md118", null ]
      ] ],
      [ "Simulation Loop", "md_simulation.html#autotoc_md119", [
        [ "time step", "md_simulation.html#autotoc_md120", null ],
        [ "find pairs", "md_simulation.html#autotoc_md121", null ],
        [ "create contacts", "md_simulation.html#autotoc_md122", null ],
        [ "rebuild BVH", "md_simulation.html#autotoc_md123", null ],
        [ "narrow phase", "md_simulation.html#autotoc_md124", null ],
        [ "merge islands", "md_simulation.html#autotoc_md125", null ],
        [ "split island", "md_simulation.html#autotoc_md126", null ],
        [ "solve constraints", "md_simulation.html#autotoc_md127", null ],
        [ "update transforms", "md_simulation.html#autotoc_md128", null ],
        [ "hit events", "md_simulation.html#autotoc_md129", null ],
        [ "refit BVH", "md_simulation.html#autotoc_md130", null ],
        [ "bullets", "md_simulation.html#autotoc_md131", null ],
        [ "island sleep", "md_simulation.html#autotoc_md132", null ],
        [ "sensors", "md_simulation.html#autotoc_md133", null ]
      ] ],
      [ "Determinism", "md_simulation.html#autotoc_md134", null ]
    ] ],
    [ "Loose Ends", "md_loose__ends.html", [
      [ "User Data", "md_loose__ends.html#autotoc_md136", null ],
      [ "Pixels and Coordinate Systems", "md_loose__ends.html#autotoc_md137", null ],
      [ "Debug Drawing", "md_loose__ends.html#autotoc_md138", null ],
      [ "Limitations", "md_loose__ends.html#autotoc_md139", null ]
    ] ],
    [ "Character mover", "md_character.html", null ],
    [ "Further Reading", "md_reading.html", null ],
    [ "FAQ", "md_faq.html", [
      [ "What is Box2D?", "md_faq.html#autotoc_md143", null ],
      [ "What platforms does Box2D support?", "md_faq.html#autotoc_md144", null ],
      [ "Who makes it?", "md_faq.html#autotoc_md145", null ],
      [ "How do I get help?", "md_faq.html#autotoc_md146", null ],
      [ "Documentation", "md_faq.html#autotoc_md147", [
        [ "Why isn't a feature documented?", "md_faq.html#autotoc_md148", null ]
      ] ],
      [ "Prerequisites", "md_faq.html#autotoc_md149", [
        [ "Programming", "md_faq.html#autotoc_md150", null ],
        [ "Math and Physics", "md_faq.html#autotoc_md151", null ]
      ] ],
      [ "API", "md_faq.html#autotoc_md152", [
        [ "What units does Box2D use?", "md_faq.html#autotoc_md153", null ],
        [ "How do I convert pixels to meters?", "md_faq.html#autotoc_md154", null ],
        [ "Why don't you use this awesome language?", "md_faq.html#autotoc_md155", null ],
        [ "Can I use Box2D in a DLL?", "md_faq.html#autotoc_md156", null ],
        [ "Is Box2D thread-safe?", "md_faq.html#autotoc_md157", null ]
      ] ],
      [ "Build Issues", "md_faq.html#autotoc_md158", [
        [ "Why doesn't my code compile and/or link?", "md_faq.html#autotoc_md159", null ]
      ] ],
      [ "Rendering", "md_faq.html#autotoc_md160", [
        [ "What are Box2D's rendering capabilities?", "md_faq.html#autotoc_md161", null ],
        [ "But the samples application draws stuff", "md_faq.html#autotoc_md162", null ],
        [ "How do I draw shapes?", "md_faq.html#autotoc_md163", null ]
      ] ],
      [ "Accuracy", "md_faq.html#autotoc_md164", null ],
      [ "Making Games", "md_faq.html#autotoc_md165", [
        [ "Worms Clones", "md_faq.html#autotoc_md166", null ],
        [ "Tile Based Environment", "md_faq.html#autotoc_md167", null ],
        [ "Asteroid Type Coordinate Systems", "md_faq.html#autotoc_md168", null ]
      ] ],
      [ "Determinism", "md_faq.html#autotoc_md169", [
        [ "Is Box2D deterministic?", "md_faq.html#autotoc_md170", null ],
        [ "But I really want determinism", "md_faq.html#autotoc_md171", null ]
      ] ],
      [ "What are the common mistakes made by new users?", "md_faq.html#autotoc_md172", null ]
    ] ],
    [ "Migration Guide", "md_migration.html", [
      [ "Version 2.4 to Version 3.0", "md_migration.html#autotoc_md174", [
        [ "Creating a world", "md_migration.html#autotoc_md175", null ],
        [ "Creating a body", "md_migration.html#autotoc_md176", null ],
        [ "Creating a shape", "md_migration.html#autotoc_md177", null ],
        [ "Chains", "md_migration.html#autotoc_md178", null ],
        [ "Creating a joint", "md_migration.html#autotoc_md179", null ],
        [ "New solver", "md_migration.html#autotoc_md180", null ],
        [ "Contact data", "md_migration.html#autotoc_md181", null ],
        [ "Sensors", "md_migration.html#autotoc_md182", null ],
        [ "Queries", "md_migration.html#autotoc_md183", null ],
        [ "World iteration", "md_migration.html#autotoc_md184", null ],
        [ "Library configuration", "md_migration.html#autotoc_md185", null ]
      ] ]
    ] ],
    [ "v3.1 Release Notes", "md_release__notes__v310.html", [
      [ "API Changes", "md_release__notes__v310.html#autotoc_md187", null ],
      [ "New Features", "md_release__notes__v310.html#autotoc_md188", null ],
      [ "Improvements", "md_release__notes__v310.html#autotoc_md189", null ],
      [ "Bugs Fixes", "md_release__notes__v310.html#autotoc_md190", null ],
      [ "Infrastructure", "md_release__notes__v310.html#autotoc_md191", null ]
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
"group__distance.html#ga01ce5ae3a29a436e19ded886074e0968",
"group__math.html#ga5ee1f8b880d4f205823cc3faaaf95437",
"group__shape.html#ga7ee22c73413d850c0937526938f92ff2",
"group__world.html#gafd27d65b3fdbdab569427b6a94b55e9c"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';