@echo off
setlocal enabledelayedexpansion

set "namelist=namelist.txt"

if not exist "%namelist%" ( echo.> "%namelist%" )

for %%F in (*.json) do (
   set "filename=%%~nxF"
   set "newname=!filename: =_!"
   if not "!filename!"=="!newname!" ( ren "%%F" "!newname!" )
)

for %%F in (*.json) do (
   set "filename=%%~nF"
   echo !filename:_= ! >> %namelist%
)
endlocal
