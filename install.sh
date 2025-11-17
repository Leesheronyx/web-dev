#!/bin/bash

# Обновляем список пакетов
sudo apt update

# Системные инструменты
sudo apt install -y build-essential curl wget git vim htop neofetch unzip p7zip-full

# Мультимедиа и кодеки
sudo apt install -y ubuntu-restricted-extras

# Программы
sudo apt install -y mc gparted qbittorrent vlc

# VS Code через snap
sudo snap install code --classic

# Автоматическая установка драйверов NVIDIA
sudo ubuntu-drivers autoinstall

# Финальное обновление системы
sudo apt upgrade -y

echo "----------------------------------------"
echo "Установка завершена, Повелитель!"
echo "Система полностью готова к работе."
echo "----------------------------------------"
