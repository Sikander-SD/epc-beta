
@echo off

set /p choice=Are you sure you want to delete all .jpg files? (Y/N): 
if /i "%choice%"=="Y" (
    for /r %%f in (*.jpg) do del "%%f"
    echo All .jpg files have been deleted.
) else (
    echo Deletion canceled.
)
pause