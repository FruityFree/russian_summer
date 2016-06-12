ssh -t ponyo@188.166.18.121 "rm -rf /home/ponyo/apps/russian_summer/*"
scp -r ./* ponyo@188.166.18.121:/home/ponyo/apps/russian_summer
