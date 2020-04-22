@echo off
set filter=*.bsp

for /R %pfad% %%f in (%filter%) do (
	set map=%ff
    @echo %map:~10,5% >> maplist.txt
)