@echo off
setlocal enabledelayedexpansion

for /d %%F in (*) do (
   set "filename=%%~nxF"
   set "newname=!filename: =_!"
	echo !newname!
   if not "!filename!"=="!newname!" ( ren "%%F" "!newname!" )
)
endlocal
pause
