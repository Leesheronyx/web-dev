#!/bin/bash

DISK=$1
MOUNTPOINT=$2

if [ -z "$DISK" ] || [ -z "$MOUNTPOINT" ]; then
    echo "Использование: ./mount_disk.sh /dev/sdX1 /mnt/имя"
    exit 1
fi

# Создаём папку
sudo mkdir -p $MOUNTPOINT

# Узнаём UUID
UUID=$(blkid -s UUID -o value $DISK)

if [ -z "$UUID" ]; then
    echo "Ошибка: не удалось получить UUID."
    exit 1
fi

# Резервная копия fstab
sudo cp /etc/fstab /etc/fstab.backup

# Добавляем запись в fstab
echo "UUID=$UUID  $MOUNTPOINT  ext4  defaults  0  0" | sudo tee -a /etc/fstab

# Выставляем права
sudo chmod 777 $MOUNTPOINT

# Монтируем прямо сейчас
sudo mount -a

echo "Готово, Повелитель! $DISK смонтирован в $MOUNTPOINT."
