<!-- Component_Interface -->

## API Overview

## Error Handling and Logging Policy

Error handling logging is based on Native syngo EMH concepts.

For logging Gantry Display has its own project named "MI.NM.GantryDisplayLogger.Impl" which handles Logging for gantry display.

Errors from Angular App and WPF App will be forwarded to Gantry Display backend for logging using above assembly.

### Logging Domain

### Trace Domain and Markers

The component uses FTrace as the tracing mechanism. Logging is done using the syngo mechanism to write to the event log. Shall be realized through tracing AOP provided by H framework.

### Tools

## API Definition

## Deployment View

### Configuration Files

### Licensing

### Backup Restore

### Installation

This will be deployed as a library and will be the part of Denali package installer.

## Storage Mechanisms and Network Protocols

## Extensions 

