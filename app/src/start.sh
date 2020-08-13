#!/bin/bash
# A custom startup script for the node application.
# This script is referenced in the manifest.yml under the field command.
# In this example we are just logging out some standard PCF environment variables for the app and any bound services.

echo "[INFO] Starting NodeJS app via custom startup script...";
echo "----------------------------------------------------------------------------------------------------"
echo "[INFO] Container Environment Variables";
echo "[INFO] USE_SESSION:          $USE_SESSION";
echo "[INFO] SESSION_COOKIE_NAME:  $SESSION_COOKIE_NAME";
echo "[INFO] VCAP_APPLICATION:     $VCAP_APPLICATION";
echo "[INFO] VCAP_SERVICES:        $VCAP_APPLICATION";
echo "----------------------------------------------------------------------------------------------------"

# Run the NodeJS App.
node index.js