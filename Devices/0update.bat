@echo off
setlocal enabledelayedexpansion

set "namelist=namelist.txt"

//create empty file
if not exist "%namelist%" ( echo.> "%namelist%" )

//rename json files
for %%F in (*.json) do (
   set "filename=%%~nxF"
   set "newname=!filename: =_!"
   if not "!filename!"=="!newname!" ( ren "%%F" "!newname!" )
)

//add json filename to namelist.txt
for %%F in (*.json) do (
   set "filename=%%~nF"
   echo !filename:_= ! >> %namelist%
)
endlocal
