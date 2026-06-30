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
  [ "Box3D", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "Hello Box3D", "hello.html", [
      [ "Creating a World", "hello.html#autotoc_md20", null ],
      [ "Creating a Ground Box", "hello.html#autotoc_md21", null ],
      [ "Creating a Dynamic Body", "hello.html#autotoc_md22", null ],
      [ "Simulating the World", "hello.html#autotoc_md23", null ],
      [ "Multithreading (optional)", "hello.html#autotoc_md24", null ],
      [ "Cleanup", "hello.html#autotoc_md25", null ]
    ] ],
    [ "Samples", "samples.html", null ],
    [ "Foundations", "md_foundation.html", [
      [ "Assertions", "md_foundation.html#autotoc_md27", null ],
      [ "Allocation", "md_foundation.html#autotoc_md28", null ],
      [ "Version", "md_foundation.html#autotoc_md29", null ],
      [ "Vector Math", "md_foundation.html#autotoc_md30", [
        [ "b3Vec3", "md_foundation.html#autotoc_md31", null ],
        [ "b3Quat", "md_foundation.html#autotoc_md32", null ],
        [ "b3Transform", "md_foundation.html#autotoc_md33", null ],
        [ "b3Matrix3", "md_foundation.html#autotoc_md34", null ],
        [ "b3AABB", "md_foundation.html#autotoc_md35", null ]
      ] ],
      [ "Multithreading", "md_foundation.html#multi", null ],
      [ "Multithreading Multiple Worlds", "md_foundation.html#autotoc_md36", null ]
    ] ],
    [ "Collision", "md_collision.html", [
      [ "Shape Primitives", "md_collision.html#autotoc_md38", [
        [ "Spheres", "md_collision.html#autotoc_md39", null ],
        [ "Capsules", "md_collision.html#autotoc_md40", null ],
        [ "Convex Hulls", "md_collision.html#autotoc_md41", null ],
        [ "Triangle Meshes", "md_collision.html#autotoc_md42", null ],
        [ "Height Fields", "md_collision.html#autotoc_md43", null ],
        [ "Compound Shapes", "md_collision.html#autotoc_md44", null ]
      ] ],
      [ "Geometric Queries", "md_collision.html#autotoc_md45", [
        [ "Shape Point Test", "md_collision.html#autotoc_md46", null ],
        [ "Ray Cast", "md_collision.html#autotoc_md47", null ],
        [ "Shape Cast", "md_collision.html#autotoc_md48", null ],
        [ "Distance", "md_collision.html#autotoc_md49", null ],
        [ "Time of Impact", "md_collision.html#autotoc_md50", null ],
        [ "Contact Manifolds", "md_collision.html#autotoc_md51", null ]
      ] ],
      [ "Dynamic Tree", "md_collision.html#autotoc_md52", [
        [ "AABB Query", "md_collision.html#autotoc_md53", null ],
        [ "Closest Query", "md_collision.html#autotoc_md54", null ],
        [ "Ray Cast", "md_collision.html#autotoc_md55", null ],
        [ "Box Cast", "md_collision.html#autotoc_md56", null ]
      ] ]
    ] ],
    [ "Compound Shapes", "md_compound.html", [
      [ "Design Intent", "md_compound.html#autotoc_md58", null ],
      [ "Building a Compound", "md_compound.html#autotoc_md59", null ],
      [ "The b3Compound Structure", "md_compound.html#autotoc_md60", null ],
      [ "Serialization", "md_compound.html#autotoc_md61", null ],
      [ "Attaching to a Static Body", "md_compound.html#autotoc_md62", null ],
      [ "Querying a Compound", "md_compound.html#autotoc_md63", null ],
      [ "Teardown", "md_compound.html#autotoc_md64", null ]
    ] ],
    [ "Simulation", "md_simulation.html", [
      [ "Ids", "md_simulation.html#autotoc_md66", null ],
      [ "World", "md_simulation.html#autotoc_md67", [
        [ "World Definition", "md_simulation.html#autotoc_md68", null ],
        [ "World Lifetime", "md_simulation.html#autotoc_md69", null ],
        [ "Simulation", "md_simulation.html#autotoc_md70", null ]
      ] ],
      [ "Rigid Bodies", "md_simulation.html#autotoc_md71", [
        [ "Body Types", "md_simulation.html#autotoc_md72", null ],
        [ "Body Definition", "md_simulation.html#autotoc_md73", null ],
        [ "Body Type", "md_simulation.html#autotoc_md74", null ],
        [ "Position and Orientation", "md_simulation.html#autotoc_md75", null ],
        [ "Damping", "md_simulation.html#autotoc_md76", null ],
        [ "Gravity Scale", "md_simulation.html#autotoc_md77", null ],
        [ "Sleep Parameters", "md_simulation.html#autotoc_md78", null ],
        [ "Motion Locks", "md_simulation.html#autotoc_md79", null ],
        [ "Bullets", "md_simulation.html#bullets", null ],
        [ "Disabling", "md_simulation.html#autotoc_md80", null ],
        [ "User Data", "md_simulation.html#autotoc_md81", null ],
        [ "Body Lifetime", "md_simulation.html#autotoc_md82", null ],
        [ "Using a Body", "md_simulation.html#autotoc_md83", null ],
        [ "Mass Data", "md_simulation.html#autotoc_md84", null ],
        [ "State Information", "md_simulation.html#autotoc_md85", null ],
        [ "Position and Velocity", "md_simulation.html#autotoc_md86", null ],
        [ "Forces and Impulses", "md_simulation.html#autotoc_md87", null ],
        [ "Coordinate Transformations", "md_simulation.html#autotoc_md88", null ],
        [ "Accessing Shapes and Joints", "md_simulation.html#autotoc_md89", null ],
        [ "Body Events", "md_simulation.html#autotoc_md90", null ]
      ] ],
      [ "Shapes", "md_simulation.html#autotoc_md91", [
        [ "Shape Lifetime", "md_simulation.html#autotoc_md92", null ],
        [ "Density", "md_simulation.html#autotoc_md93", null ],
        [ "Friction", "md_simulation.html#autotoc_md94", null ],
        [ "Restitution", "md_simulation.html#autotoc_md95", null ],
        [ "Friction and Restitution Callbacks", "md_simulation.html#autotoc_md96", null ],
        [ "Filtering", "md_simulation.html#filtering", null ],
        [ "Sensors", "md_simulation.html#autotoc_md97", null ],
        [ "Sensor Events", "md_simulation.html#autotoc_md98", null ]
      ] ],
      [ "Contacts", "md_simulation.html#autotoc_md99", [
        [ "Terminology", "md_simulation.html#autotoc_md100", [
          [ "contact point", "md_simulation.html#autotoc_md101", null ],
          [ "contact normal", "md_simulation.html#autotoc_md102", null ],
          [ "contact separation", "md_simulation.html#autotoc_md103", null ],
          [ "contact manifold", "md_simulation.html#autotoc_md104", null ],
          [ "normal impulse", "md_simulation.html#autotoc_md105", null ],
          [ "tangent impulse", "md_simulation.html#autotoc_md106", null ],
          [ "contact point id", "md_simulation.html#autotoc_md107", null ],
          [ "speculative contact", "md_simulation.html#autotoc_md108", null ]
        ] ],
        [ "Contact Lifetime", "md_simulation.html#autotoc_md109", null ],
        [ "Contact Data", "md_simulation.html#autotoc_md110", null ],
        [ "Contact Events", "md_simulation.html#autotoc_md111", [
          [ "Contact Touch Event", "md_simulation.html#autotoc_md112", null ],
          [ "Hit Events", "md_simulation.html#autotoc_md113", null ]
        ] ],
        [ "Contact Filtering", "md_simulation.html#autotoc_md114", null ],
        [ "Advanced Contact Handling", "md_simulation.html#autotoc_md115", [
          [ "Custom Filtering Callback", "md_simulation.html#autotoc_md116", null ],
          [ "Pre-Solve Callback", "md_simulation.html#autotoc_md117", null ]
        ] ]
      ] ],
      [ "Joints", "md_simulation.html#autotoc_md118", [
        [ "Joint Definition", "md_simulation.html#autotoc_md119", null ],
        [ "Joint Lifetime", "md_simulation.html#autotoc_md120", null ],
        [ "Using Joints", "md_simulation.html#autotoc_md121", null ],
        [ "Distance Joint", "md_simulation.html#autotoc_md122", null ],
        [ "Revolute Joint", "md_simulation.html#autotoc_md123", null ],
        [ "Prismatic Joint", "md_simulation.html#autotoc_md124", null ],
        [ "Weld Joint", "md_simulation.html#autotoc_md125", null ],
        [ "Motor Joint", "md_simulation.html#autotoc_md126", null ],
        [ "Wheel Joint", "md_simulation.html#autotoc_md127", null ],
        [ "Spherical Joint", "md_simulation.html#autotoc_md128", null ],
        [ "Parallel Joint", "md_simulation.html#autotoc_md129", null ],
        [ "Filter Joint", "md_simulation.html#autotoc_md130", null ]
      ] ],
      [ "Spatial Queries", "md_simulation.html#spatial", [
        [ "Overlap Queries", "md_simulation.html#autotoc_md131", [
          [ "Query Filtering", "md_simulation.html#autotoc_md132", null ],
          [ "AABB Overlap", "md_simulation.html#autotoc_md133", null ],
          [ "Shape Overlap", "md_simulation.html#autotoc_md134", null ]
        ] ],
        [ "Ray-casts", "md_simulation.html#autotoc_md135", null ],
        [ "Shape-casts", "md_simulation.html#autotoc_md136", null ]
      ] ],
      [ "Simulation Loop", "md_simulation.html#autotoc_md137", [
        [ "time step", "md_simulation.html#autotoc_md138", null ],
        [ "find pairs", "md_simulation.html#autotoc_md139", null ],
        [ "create contacts", "md_simulation.html#autotoc_md140", null ],
        [ "rebuild BVH", "md_simulation.html#autotoc_md141", null ],
        [ "narrow phase", "md_simulation.html#autotoc_md142", null ],
        [ "merge islands", "md_simulation.html#autotoc_md143", null ],
        [ "split island", "md_simulation.html#autotoc_md144", null ],
        [ "solve constraints", "md_simulation.html#autotoc_md145", null ],
        [ "update transforms", "md_simulation.html#autotoc_md146", null ],
        [ "hit events", "md_simulation.html#autotoc_md147", null ],
        [ "refit BVH", "md_simulation.html#autotoc_md148", null ],
        [ "bullets", "md_simulation.html#autotoc_md149", null ],
        [ "island sleep", "md_simulation.html#autotoc_md150", null ],
        [ "sensors", "md_simulation.html#autotoc_md151", null ]
      ] ],
      [ "Determinism", "md_simulation.html#autotoc_md152", null ]
    ] ],
    [ "Loose Ends", "md_loose__ends.html", [
      [ "User Data", "md_loose__ends.html#autotoc_md154", null ],
      [ "Coordinate Systems", "md_loose__ends.html#autotoc_md155", null ],
      [ "Debug Drawing", "md_loose__ends.html#autotoc_md156", null ],
      [ "Limitations", "md_loose__ends.html#autotoc_md157", null ]
    ] ],
    [ "Recording and Replay", "recording.html", [
      [ "Recording", "recording.html#autotoc_md158", null ],
      [ "Replay", "recording.html#autotoc_md159", [
        [ "Seeking and keyframes", "recording.html#autotoc_md160", null ],
        [ "Worker count", "recording.html#autotoc_md161", null ]
      ] ],
      [ "The seed snapshot", "recording.html#autotoc_md162", null ],
      [ "Debug shapes for replay", "recording.html#autotoc_md163", null ],
      [ "Viewing a recording", "recording.html#autotoc_md164", null ],
      [ "Determinism contract", "recording.html#autotoc_md165", null ],
      [ "Spatial queries", "recording.html#autotoc_md166", null ],
      [ "Limitations", "recording.html#autotoc_md167", null ]
    ] ],
    [ "Large Worlds (Double Precision)", "large-worlds.html", [
      [ "Enabling it", "large-worlds.html#autotoc_md168", null ],
      [ "The two world-position types", "large-worlds.html#autotoc_md169", null ],
      [ "Operating range", "large-worlds.html#autotoc_md170", null ],
      [ "Queries far from the origin", "large-worlds.html#autotoc_md171", null ],
      [ "Debug drawing", "large-worlds.html#autotoc_md172", null ],
      [ "Determinism", "large-worlds.html#autotoc_md173", null ],
      [ "SIMD", "large-worlds.html#autotoc_md174", null ]
    ] ],
    [ "Character Mover", "md_character.html", [
      [ "The Mover Capsule", "md_character.html#autotoc_md176", null ],
      [ "Workflow", "md_character.html#autotoc_md177", null ],
      [ "Swept Motion: b3World_CastMover", "md_character.html#autotoc_md178", null ],
      [ "Contact Planes: b3World_CollideMover", "md_character.html#autotoc_md179", [
        [ "Per-Body Query: b3Body_CollideMover", "md_character.html#autotoc_md180", null ]
      ] ],
      [ "Resolving Overlap: b3SolvePlanes", "md_character.html#autotoc_md181", null ],
      [ "Velocity Clipping: b3ClipVector", "md_character.html#autotoc_md182", null ],
      [ "Putting It Together", "md_character.html#autotoc_md183", null ]
    ] ],
    [ "Further Reading", "md_reading.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
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
"group__collision.html#ga0b59652a5c030656a32c810cd126eab2",
"group__height__field.html#ad3184e072e05567132c702c3e245d2aa",
"group__math.html#gaf856aa79696186be16614c4b51b905ae",
"group__query.html#ga17d3fc0ef821ea14976c6b606f45a004",
"group__spherical__joint.html#gaaa33cdf2564cff95bfa2a2a43d466a74",
"hello.html#autotoc_md24"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';