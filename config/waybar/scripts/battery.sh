#!/bin/bash

## Get battery info
BATTERY=$(acpi | awk -F ' ' 'END {print $4}' | tr -d '%',)
CHARGE=$(acpi | awk -F ' ' 'END {print $3}')
ADAPTER=$(acpi -a | awk -F ' ' '{print $3}')

function main() {
	if [[ "$CHARGE" == *"Charging"* ]] && [[ "$BATTERY" -lt 100 ]]; then
		ICON="images/icons/battery/battery-charging.png"
	elif [[ "$ADAPTER" == *"on-line"* ]] && [[ "$CHARGE" != *"Charging"* ]]; then
		ICON="images/icons/battery/plugged.png"
	else
		if [[ "$BATTERY" -lt 100 && "$BATTERY" -ge 66 ]]; then
			ICON="images/icons/battery/battery-66-99.png"
		elif [[ "$BATTERY" -lt 66 && "$BATTERY" -ge 33 ]]; then
			ICON="images/icons/battery/battery-33-66.png"
		elif [[ "$BATTERY" -lt 33 && "$BATTERY" -ge 0 ]]; then
			ICON="images/icons/battery/battery-0-33.png"
		fi
	fi
}

if [[ "$1" == '--icon' ]]; then
	main
elif [[ "$1" == '--perc' && "$CHARGE" == *"Charging"* ]]; then
	echo -n "$BATTERY"
elif [[ "$1" == '--perc' ]] && [[ "$ADAPTER" == *"on-line"* ]] && [[ "$CHARGE" != *"Charging"* ]]; then
	echo -n "Plugged"
elif [[ "$1" == '--perc' ]]; then
	echo -n "$BATTERY%"
elif [[ "$1" == '' ]]; then
	main
	echo "{\"text\": '$BATTERY%', \"icon\": '$ICON'}"
fi
