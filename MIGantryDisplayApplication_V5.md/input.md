<table>
<colgroup>
<col style="width: 0%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 3%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 13%" />
<col style="width: 11%" />
<col style="width: 9%" />
<col style="width: 13%" />
<col style="width: 0%" />
<col style="width: 0%" />
</colgroup>
<tbody>
<tr class="odd">
<td colspan="9"><p>MI.One</p>
<p>VA30A</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="8"></td>
<td><strong>MI</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td colspan="12"></td>
</tr>
<tr class="even">
<td colspan="9"><p>MI Gantry Display Application</p>
<p>SW Component Design Specification</p>
<p>Version 05</p>
<p><strong>Status: Draft</strong></p>
<p>Akash Agarwal</p>
<p>SHS TE DC IND DI-MI SWF SC1</p>
<p>Copyright © Siemens Medical Solutions USA, Inc<br />
Confidential</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td colspan="10"></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td>Doc-Number</td>
<td>Doc-Type</td>
<td>Doc-Part</td>
<td>Doc-Version</td>
<td colspan="3"></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><strong>11218622</strong></td>
<td><strong>EDS</strong></td>
<td><strong>100</strong></td>
<td><strong>05</strong></td>
<td colspan="3"></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="9"></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

[]{#_Toc316345824 .anchor}History

  ------------- ------------ ----------------- -------------------------- -------------------
  **Version**   **Date**     **Author          **Changes and Reason /     **Review-report**
                             Department**      Change Request / CHARM**   

  1.0           09.05.2019   Ceaser Y          initial version            

  2.0           10.10.2019   Sadashiv          Added design for planar    
                                               offset and IQSpect         

  3.0           07.04.2020   Akash Agarwal     Added design for           
                                               calibration operations     

  3.0           08.04.2020   Sravana Kumar     Added design for expert -  
                             Ponnapula         i                          

  4.0           28.05.2021   Tanumon Bej       Updated risk table for the 
                                               defect no 354567           

  5.0           10.08.2023   Brajith Amin      Updated design for         
                                               GantryDisplayPlanning -    
                                               IQSPECT and Planar Offset  

  6.0           24.09.2023   Sanjay Kumar K B  Added design for GPT Asset 
                                               Management and Computer    
                                               Diagnostics                

  7.0           26.09.2023   Swati Jha         Added design for Unload    
                                               Dialog Sync between Gantry 
                                               Display and ICS            
  ------------- ------------ ----------------- -------------------------- -------------------

[]{#_Toc409494144 .anchor}Table of Contents

History [2](#_Toc316345824)

Table of Contents [3](#_Toc409494144)

1 Introduction [6](#_Toc149283910)

1.1 Purpose and Scope [6](#purpose-and-scope)

1.2 Definitions, Acronyms and Abbreviations
[6](#definitions-acronyms-and-abbreviations)

1.2.1 Definitions [6](#_Toc149283913)

1.2.2 Abbreviations and Acronyms [6](#_Toc149283914)

1.3 References [6](#references)

2 Overall Description [7](#overall-description)

2.1 Component Overview [7](#component-overview)

2.2 Design Principles [7](#design-principles)

2.3 Assumptions, Dependencies, and Limitations
[8](#assumptions-dependencies-and-limitations)

2.3.1 Assumptions [8](#_Toc149283920)

2.3.2 Dependencies [8](#_Toc149283921)

2.3.3 Limitations [8](#_Toc149283922)

3 Component Interface [9](#component-interface)

3.1 API Overview [9](#api-overview)

3.2 Error Handling and Logging Policy
[9](#error-handling-and-logging-policy)

3.2.1 Logging Domain [9](#logging-domain)

3.2.2 Trace Domain and Markers [9](#trace-domain-and-markers)

3.2.3 Tools [10](#tools)

3.3 API Definition [10](#api-definition)

3.4 Deployment View [10](#deployment-view)

3.4.1 Configuration Files [10](#configuration-files)

3.4.2 Licensing [10](#licensing)

3.4.3 Backup Restore [10](#backup-restore)

3.4.4 Installation [10](#installation)

3.5 Storage Mechanisms and Network Protocols
[10](#storage-mechanisms-and-network-protocols)

3.6 Extensions [10](#extensions)

4 Risks [11](#risks)

5 Internal Design [13](#internal-design)

5.1 Logical View [13](#logical-view)

5.1.1 Calibration [15](#calibration)

5.1.2 GantryDisplayDiagnostics [17](#gantrydisplaydiagnostics)

5.1.3 GantryDisplayPlanning [18](#gantrydisplayplanning)

5.1.4 GantryOperations [19](#gantryoperations)

5.1.5 IQSPECT [21](#iqspect)

5.1.6 Planar Offset [22](#planar-offset)

5.1.7 PowerSave [23](#powersave)

5.1.8 Recovery [24](#recovery)

5.1.8.1 MI.GantryDisplay.DataProvider::LocalValueParameter\<T\>
[25](#mi.gantrydisplay.dataproviderlocalvalueparametert)

5.1.9 RemoteLauncher [25](#remotelauncher)

5.1.10 SystemReconfiguration [27](#systemreconfiguration)

5.1.11 UnloadPatient [28](#unloadpatient)

5.1.12 WebConfig for IIS [29](#webconfig-for-iis)

5.2 Deployment View [29](#deployment-view-1)

5.3 Dynamic View [30](#dynamic-view)

5.3.1 Calibration [36](#calibration-1)

5.3.1.1 WCF [38](#wcf)

5.3.2 GantryDisplay(Exam Workflow) [39](#gantrydisplayexam-workflow)

5.3.3 GantryDisplayDiagnostics [39](#gantrydisplaydiagnostics-1)

5.3.4 GantryOperations [41](#gantryoperations-1)

5.3.5 IQSPECT [42](#iqspect-1)

5.3.6 Planar Offset [45](#planar-offset-1)

5.3.6.1 InteractionFragment [47](#interactionfragment)

5.3.7 PowerSave [47](#powersave-1)

5.3.8 Recovery [48](#recovery-1)

5.3.9 RemoteLauncher [49](#remotelauncher-1)

5.3.10 SystemReconfiguration [51](#systemreconfiguration-1)

5.3.10.1 WebServer [52](#webserver)

5.3.11 UnloadPatient [52](#unloadpatient-1)

5.4 Algorithms [53](#algorithms)

5.5 Data View [53](#data-view)

5.6 Code View [53](#code-view)

6 Testing [54](#testing)

7 Appendices [55](#appendices)

# Introduction

This document shall act as a detailed design specification of Gantry
Display App, FE and BE.

## Purpose and Scope

This document contains the complete specification of the external and
internal design of the Gantry Dsiplay App (including FE and BE).

## Definitions, Acronyms and Abbreviations

### Definitions

### Abbreviations and Acronyms

DICOM Digital Imaging and COmmunication in Medicine

ICS Imaging Console System

MI Molecular Imaging

MRS MI Reconstruction System

PET Positron Emission Tomography

RIS Radiology Information System

SNAC Siemens Nuclear Acquisition Computer

SPECT Single Photon Emission Computed Tomography

BC Business Component

SC Service Component

RP Request Procedure

QC Quality Control

BE BackEnd

FE FrontEnd

API Application Programming Interface

## References

1.  MI One_SAD.doc

2.  https://sdn.healthcare.siemens.com///TORUS_VA30

# Overall Description

## Component Overview

Gantray Display is divided into 2 parts:

BE: This mainly contains all the business logic and also decides what
needs to be send to frontend. It also stores data into ViewModels and
various states.

FE: It is basically WPF application with MI.GantryDisplay.NgUi which is
nothing but Angular application contained in it. WPF mainly controls
Physio part of frontend and remaining FE part if handled by Angular.

Gantry Display is responsible for:

-   Showing Pscope Image from SNAC and also controls windowing and
    persistance of same.

-   Showing user latest SNAC positions.

-   Handling Collimator and Detector change.

-   Handling various operations like Homing, TouchPad Test, Retract,
    Reset, Unload.

-   IqSpect Planning and Planar Offset.

-   Displaying various Scan Parameters, scan progress status and also
    syncs Executions Controls buttons.

-   Syncs Calibration Scans.

Apart from above, Gantry Display BE also contains a process called
RemoteLauncher to launch GantryDisplay remotely in console machine.

Gantry Display also conatins a project called Cryptography which handles
Encryption/Decryption related things for security.

![](./image2.emf)

Abbildung 1: ComponentOverview

## Design Principles

GantryDisplayApp is a part of MIOne platform. Overall design principle
shall be based on Domain Driven Design concepts to align with the H
Framework.

GantryDisplay contains BE and FE

FE is the angular UI which is hosted in IIS.

BE communicate to SNAC through SystemInterface layer to get scanner
data.

BE also communicates to Exam Layer through H communication to get
exam/scan related data.

BE also communicates to calibration process through H communication to
display calibration scan related data.

## Assumptions, Dependencies, and Limitations

### Assumptions

GantryDisplayApp is part of SPECT application.

### Dependencies

GanrtyDisplayApp shall be depending on Exam, SystemInterface, H
Framework components, Physio etc.

### Limitations 

# Component Interface

## API Overview

## Error Handling and Logging Policy

Error handling logging is based on Native syngo EMH concepts.

For logging Gantry Display has its own project named
\"MI.NM.GantryDisplayLogger.Impl\" which handles Logging for gantry
display.

Errors from Angular App and WPF App will be forwarded to Gantry Display
backend for logging using above assembly.

### Logging Domain

### Trace Domain and Markers

The component uses FTrace as the tracing mechanism. Logging is done
using the syngo mechanism to write to the event log. Shall be realized
through tracing AOP provided by H framework.

### Tools

## API Definition

## Deployment View

### Configuration Files

### Licensing

### Backup Restore

### Installation

This will be deployed as a library and will be the part of Denali
package installer.

## Storage Mechanisms and Network Protocols

## Extensions 

# Risks

**Risks**

Package \[ Proposed, 1.0 \]

  ------------------- ----------------- --------------------- ---------------------------------------
  **Risk**            **Effect of       **Corrective Action   **Requirement Key from FS/RS**
                      Failure**         Taken**               

  **IQ-SPECT Auto     **Detectors may   **The system shall    **\<hazardkey\>385472\</hazardkey\>**
  Focus Detectors**   not be focused**  provide a method for  
                                        the user to optimize  
                                        the patient position  
                                        for scans using multi 
                                        focal (SMARTZOOM)     
                                        collimators.**        

  **IQ-SPECT Prevent  **Scan result may **The system shall    **\<hazardkey\>385471\</hazardkey\>**
  Scan When Detectors not be accurate** allow IQ-SPECT scans  
  Not Focused**                         only if organ         
                                        centering was         
                                        performed.**          

  **Confirm Auto-Move **Move of gantry  **The system shall    **\<hazardkey\>381408\</hazardkey\>**
  from Gantry         is not indicated  require the user to   
  Display**           to user**         confirm when the user 
                                        initiates an          
                                        automatic gantry      
                                        setup to the scan     
                                        start position.**     

  **Confirm System    **Configuration   **The system shall    **\<hazardkey\>378683\</hazardkey\>**
  Reconfiguration**   will not be       require the user to   
                      initiated**       confirm system motion 
                                        on the gantry display 
                                        before performing an  
                                        automated motion or a 
                                        sequence of automated 
                                        motions.**            

  **Confirm Automatic **Corresponding   **The system shall    **\<hazardkey\>378682\</hazardkey\>**
  Motion**            operation will    require the user to   
                      not be            confirm system motion 
                      initiated**       on the gantry display 
                                        before performing an  
                                        automated motion or a 
                                        sequence of automated 
                                        motions.**            

  **Close Remote      **Chances of      **The system shall    **\<hazardkey\>385258\</hazardkey\>**
  Gantry Display**    accidental        close the remote      
                      control of CT     gantry display on the 
                      scan**            console upon loading  
                                        a CT scan.**          

  **Automatic QC      **Alert for QC    **The system shall    **\<hazardkey\>394039\</hazardkey\>**
  Source Extended**   source not        notify the user in    
                      available**       the exam room when an 
                                        integrated automatic  
                                        QC source is extended 
                                        and unshielded.**     

  **Confirm Patient   **Not able to     **The system shall    **\<hazardkey\>378181\</hazardkey\>**
  Position from       confirm Patient   require the user to   
  Gantry Display**    position from     confirm the position  
                      Gantry            of the patient with   
                      Display/inside    respect to the gantry 
                      the room**        prior to performing   
                                        an MI tomographic     
                                        scan.**               

  **Specialty pallet  **scan may not be **The system shall    **\<hazardkey\>394038\</hazardkey\>**
  has been detected** possible**        give a visual         
                                        indication to the     
                                        user on the Gantry    
                                        Display when a        
                                        Specialty Pallet is   
                                        connected/installed   
                                        on the system.**      

  **Specialty pallet  **scan is blocked **The system shall    **\<hazardkey\>395288\</hazardkey\>**
  has been detected** by the specialty  give a visual         
                      pallet            indication to the     
                      precondition      user on the Gantry    
                      check**           Display when a        
                                        Specialty Pallet is   
                                        connected/installed   
                                        on the system**       

  **Gantry Display in **Remote user can **The system shall    **\<hazardkey\>402237 \</hazardkey\>**
  Expert-I Mode**     initiate motion** only allow motions    
                                        initiated by a remote 
                                        user when they have   
                                        been confirmed by a   
                                        local user.**         
  ------------------- ----------------- --------------------- ---------------------------------------

# Internal Design

## Logical View

Following class diagram shows various components which are part of
gantry display WPF application.

![](./image3.emf)

Abbildung 2: Gantry Display FE

Following class diagram shows various components linkages for toggling
pscope header. This class diagram also shows various classes and their
associations and compositions to achieve the same.

![](./image4.emf)

Abbildung 3: ShowHidePscopeHeader

This class diagram describes the whole gantry display application, which
includes both front end and back end. This diagram shows various
components and communication between them. This includes SignalR
communication between angular clients and back end hubs, H communication
between gantry display back end and Exam/Calibration/System layer.

Following class diagram also shows, how gantry display angular
application is hosted in IIS and how gantry display FE(WPF application)
is browsing to the IIS hosted angular app.

![](./image5.emf)

Abbildung 4: MI.GantryDisplay

### Calibration

Following class diagram shows the GantryDisplay class structure for
Calibration Mode. This Diagram basically shows ExecutionControl related
operation but same can be extended to ProtocolParameter, ScanProgress
and any other operation between GPT and Calibration App.

![](./image6.emf)

Abbildung 5: CalibrationExecutionControlOperation

Following class diagram shows the GantryDisplay class structure for
Calibration Motion Info Provider. This Diagram basically shows Opening
or closing automatic motion in progress and enable/Disable navigator
buttons in gantry display from calibration

![](./image7.emf)

Abbildung 6: MotionInfoProvider

### GantryDisplayDiagnostics

The class diagram to show the relationship between classes and
interfaces involved in GPT Asset management and Computer Diagnostics.

![](./image8.emf)

Abbildung 7: GantryDisplayDiagnostics

### GantryDisplayPlanning

The class diagram to show the relationship between classes and
interfaces involved in IQSpect and Planar planning operation.

![](./image9.emf)

Abbildung 8: GantryDisplayPlanning

### GantryOperations

The class diagram to describe relationship between classes for change
collimator operation in gantry display. User can install required
collimators depending on scan to be performed. For example, LEHR
collimator while performing planar scans and Smart zoom collimator for
IQSpect planning. Collimator has its own set of detector configurations,
that need to configured before the scan.

![](./image10.emf)

Abbildung 9: CollimatorChangeOperation

The class diagram to show various gantry operations that user can
perform in gantry display. Those operations include collimator change,
touch pad test, unload, retract, homing, configure gantry etc. Mainly
gantry display back end has IOperationsMonitor and IOperation interfaces
to handle various gantry operations.

![](./image11.emf)

Abbildung 10: GantryOperations

### IQSPECT

The class diagram to show the relationship between classes and
interfaces involved in IQSpect operations. Prerequisites to enable
IQSpect planning are cardiac IqSpect protocol to be loaded, smart zoom
collimator need to be installed and detectors should be in IqSpect
configuration. On moving IqSpect planning box to focus on interested
area, user can start IQSpect planning. User can do IqSpect move and
cancel operations to move detectors to focused area and to cancel or
re-center the IQSpect planning respectively.

![](./image12.emf)

Abbildung 11: IQSpect Operations

### Planar Offset

The class diagram to show relationship between classes and interfaces
for planar offset. For any planar scan protocol, when user changes zoom
\> 1.0 in PLV, offset button appears in gantry display. On click of
offset button, planar offset button controls like apply, center and
cancel are shown in gantry display UI. The planar offset focus box for
planning is also shown. User can move the box to desired offset and can
apply offset. On center button click, focus box is re-centered. On click
of cancel, offset planning is canceled and previously saved offset is
retained.

![](./image13.emf)

Abbildung 12: PlanarOffset

### PowerSave

The class diagram to show power save mode in gantry display. When user
has not done any interaction or when system is inactive for 10 minutes,
then system interface invokes power save mode. The same is notified to
gantry display. As soon as gantry display is notified with power save,
system enters into power save mode. User can wake up the system, either
by touching gantry display device or by doing any interaction in ICS.

![](./image14.emf)

Abbildung 13: PowerSave

### Recovery

The class diagram to show the relationship between the classes for
recovery in gantry display. During collimator change cancel, recovery is
invoked. Recovery operation brings the system back to nearest stabilized
state.

![](./image15.emf)

Abbildung 14: Recovery

#### MI.GantryDisplay.DataProvider::LocalValueParameter\<T\>

### RemoteLauncher

Following diagram shows how user can open remote gantry display from
console menu. It opens gantry display in read only mode if
IsVncInReadOnly property is true in vnc configuration.

![](./image16.emf)

Abbildung 15: Expert-I

![](./image17.emf)

Abbildung 16: RemoteLauncher

### SystemReconfiguration

The class diagram to show the relationship between classes and
interfaces for system reconfiguration in gantry display. Each collimator
has its own set of system configuration. It is displayed in system
reconfiguration flyout of gantry display UI. User can change to required
detector configurations for the collimator installed, to configure
detectors before starting the scan.

![](./image18.emf)

Abbildung 17: SystemReconfiguration

### UnloadPatient

The class diagram to show the relationship between classes and
interfaces involved in Unload Dialog Sync between Gantry Display and
Exam application.

![](./image19.emf)

Abbildung 18: Unload Dialog Sync

### WebConfig for IIS

## Deployment View

![](./image20.emf)

Abbildung 19: Deployment Diagram

![](./image21.emf)

Abbildung 20: GantryDisplay

## Dynamic View

Following diagram shows how Home Screen is shown when Gantry Display WPF
application comes up. It will set the HomeScreen to \"Connecting To UI\"
when Scanner is not connected and it will browse to angular app when
Scanner is connected.

![](./image22.emf)

Abbildung 21: HomeScreen

Following sequence diagram shows how Initial screen is displayed when
GantryDisplay.FE application comes up.

![](./image23.emf)

Abbildung 22: LoadInitialScreen

Following sequence diagram shows how the Patient Information is fetched
and displayed. The visibility of the patient info is fetched from
Config.Net.

![](./image24.emf)

Abbildung 23: PatientInfoState

Following sequence diagram shows how Angular client fetches PositionAxes
view model from Backend Hub.

![](./image25.emf)

Abbildung 24: PositionAxesDataAcess

Following sequence diagram shows when Gantry Display comes up then call
comes to backend to send latest PScope ViewModel and Navigator ViewModel
to Angular clients.

![](./image26.emf)

Abbildung 25: PScopeDataAcess

Following sequence shows how we can navigate to a screen when user did
some interaction on gantry display

![](./image27.emf)

Abbildung 26: ScreenNavigation

Following sequence diagram shows how we can toggle visibility of header
of Pscope page on various user interactions.

![](./image28.emf)

Abbildung 27: ShowHidePscopeHeader

Following diagram shows the sequence of steps which will be performed
when stutdown call comes from system interface and how gantry display
backend handles that call and sends command to frontend to show pop-up
and shutdown gantry display.

![](./image29.emf)

Abbildung 28: ShutDown

### Calibration

Following sequence diagram shows a sequence to update execution control
buttons from CalibrationApp to GantryDisplay and vice versa.

![](./image30.emf)

Abbildung 29: CalibrationExecutionControlOperation

Following sequence diagram shows object exchange between Gantry Display
and Calibration using WCF/H communication.

![](./image31.emf)

Abbildung 30: CalibrationGPTCommunication

Following sequence diagram shows the GantryDisplay sequence structure
for Calibration Motion Info Provider. This Diagram basically shows
Opening or closing automatic motion in progress and enable/Disable
navigator buttons in gantry display from calibration

![](./image32.emf)

Abbildung 31: MotionInfoProvider

#### WCF

### GantryDisplay(Exam Workflow)

![](./image33.emf)

Abbildung 32: Exam Workflow

### GantryDisplayDiagnostics

The Sequence diagram to show data flow for Asset Data of GPT Computer
Diagram.

![](./image34.emf)

Abbildung 33: GPTAssetData

The Sequence diagram to show data flow for StateData of GPT Computer
Diagram.

![](./image35.emf)

Abbildung 34: GPTStateData

### GantryOperations

The sequence diagram to show various gantry operations that user can
perform in gantry display. Those operations include collimator change,
touch pad test, unload, retract, homing, configure gantry etc.

![](./image36.emf)

Abbildung 35: GantryOperations

### IQSPECT

The sequence diagram to show the sequential flow of enabling IqSpect
execution controls in the gantry display UI. When IQSpect planning is
enabled and planning box appears in the UI, user does IQSpect planning
by moving the box. Initially IQSpect execution controls like Move and
Cancel are disabled. Once user starts moving planning box, Move button
is enabled in the gantry display UI.

![](./image37.emf)

Abbildung 36: Enable IQSpect Execution Controls

The diagram describes the operational flow of canceling IQSpect move
operation, in sequence. IQSpect move operation is cancelable operation.
Once user performs move operation, meanwhile user can cancel ongoing
detectors move operation. On click of cancel, from gantry display UI,
gantry display back end sends cancel command to SNAC to cancel ongoing
operation. SNAC either sends gantry setup completed event with canceled
status, indicating success or it sends event with error, indicating
failure.

![](./image38.emf)

Abbildung 37: IQSpect Cancel Operation

The sequence diagram to show the flow of performing IQSpect move
operation. Once user is fine with focused area during IQSpect planning,
user clicks IQSpect Move button. IQSpect box position points are sent to
SNAC. Detectors are moved focusing planned area. If auto move of
detectors is success, SNAC sends success status and updates IQSpect
positions. Otherwise it sends gantry setup completed with error.

![](./image39.emf)

Abbildung 38: IQSpect Move Operation

![](./image40.emf)

Abbildung 39: IQSpectInteractions

### Planar Offset

Sequence diagram to describe the flow of applying planar offset. Offset
planning is enabled for acquisition zoom value \> 1. User moves the
focus box to the desired portion. Once user is fine with the focused
area, he can apply offset. Gantry display back end sends offset
positions to system interface to apply the desired offset.

![](./image41.emf)

Abbildung 40: Apply And Sync Offset

Sequence diagram to describe the flow of applying planar offset. Offset
planning is enabled for acquisition zoom value \> 1. User moves the
focus box to the desired portion. Once user is fine with the focused
area, he can apply offset. Gantry display back end sends offset
positions to system interface to apply the desired offset.

![](./image42.emf)

Abbildung 41: Apply Planar Offset

Sequence diagram to show the flow of Cancel planar offset. During
current planar offset planning, if user doesn\'t intend to save the
offset, he can cancel offset. On cancel offset, previously applied
offset is retained. Pscope image is applied with the current acquisition
zoom and previously applied offset.

![](./image43.emf)

Abbildung 42: Cancel Planar Offset

#### InteractionFragment

### PowerSave

Following diagram shows how the PowerSave/Power WakeUp call comes from
System Layer to GantryDisplay BE and sends the same to UI which in turn
informs the system to move to corresponding power state.

![](./image44.emf)

Abbildung 43: ScannerPowerState

### Recovery

Following diagram shows the sequence of operations performed when
recovery operation is started.

![](./image45.emf)

Abbildung 44: Recovery

### RemoteLauncher

Following diagram shows how user can open remote gantry display from
console menu. It opens gantry display in read only mode if
IsVncInReadOnly property is true in vnc configuration.

![](./image46.emf)

Abbildung 45: Expert-I

Following diagram shows how user can open remote gantry display from
console menu. It opens gantry display in read only mode if
IsVncInReadOnly property is true in vnc configuration.

![](./image47.emf)

Abbildung 46: RemoteLauncher

### SystemReconfiguration

Following diagram shows the sequence of steps performed when Collimator
change or change Detector configuration operation is initiated by user.
It also shows various events like OnGantrySetupCompleted,
GantrySetupStarted etc. which will be handled during this operation.

![](./image48.emf)

Abbildung 47: SystemReconfiguration

#### WebServer

### UnloadPatient

The diagram describes the operational flow of how Unload Dialog Sync
happens between Gantry Display and Exam application when user clicks on
Unload button on Gantry Display UI, in sequence.

![](./image49.emf)

Abbildung 48: Unload Dialog Sync

## Algorithms

## Data View

## Code View

# Testing 

# Appendices 

Copyright © Siemens Medical Solutions USA, 2017. All rights reserved.
Confidential

+-------------------------+--------------------------------------------+
| **Approvals**           |                                            |
| (optional, if           |                                            |
| alternative approval is |                                            |
| not available)          |                                            |
+-------------------------+--------------------------------------------+
| **Name / Role**         | **Signature, Date**                        |
+-------------------------+--------------------------------------------+
| Brajith Amin            |                                            |
|                         |                                            |
| Software Developer      |                                            |
+-------------------------+--------------------------------------------+
| Sanjay Kumar Bayyareddy |                                            |
| Software Developer      |                                            |
+-------------------------+--------------------------------------------+
| Swati Jha               |                                            |
|                         |                                            |
| Software Developer      |                                            |
+-------------------------+--------------------------------------------+
