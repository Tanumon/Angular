<!-- Overall_Description -->

## Component Overview

Gantray Display is divided into 2 parts:

BE: This mainly contains all the business logic and also decides what needs to be send to frontend. It also stores data into ViewModels and various states.

FE: It is basically WPF application with MI.GantryDisplay.NgUi which is nothing but Angular application contained in it. WPF mainly controls Physio part of frontend and remaining FE part if handled by Angular.

Gantry Display is responsible for:

  - Showing Pscope Image from SNAC and also controls windowing and persistance of same.

  - Showing user latest SNAC positions.

  - Handling Collimator and Detector change.

  - Handling various operations like Homing, TouchPad Test, Retract, Reset, Unload.

  - IqSpect Planning and Planar Offset.

  - Displaying various Scan Parameters, scan progress status and also syncs Executions Controls buttons.

  - Syncs Calibration Scans.

Apart from above, Gantry Display BE also contains a process called RemoteLauncher to launch GantryDisplay remotely in console machine.

Gantry Display also conatins a project called Cryptography which handles Encryption/Decryption related things for security.

![ComponentOverview](../Media/image2.emf){#fig:}

## Design Principles

GantryDisplayApp is a part of MIOne platform. Overall design principle shall be based on Domain Driven Design concepts to align with the H Framework.

GantryDisplay contains BE and FE

FE is the angular UI which is hosted in IIS.

BE communicate to SNAC through SystemInterface layer to get scanner data.

BE also communicates to Exam Layer through H communication to get exam/scan related data.

BE also communicates to calibration process through H communication to display calibration scan related data.

## Assumptions, Dependencies, and Limitations

### Assumptions

GantryDisplayApp is part of SPECT application.

### Dependencies

GanrtyDisplayApp shall be depending on Exam, SystemInterface, H Framework components, Physio etc.

### Limitations 

