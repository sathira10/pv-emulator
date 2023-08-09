# Photovoltaic Emulator Frontend

This repository hosts the frontend for a Photovoltaic Emulator device, which was designed as part of the final year undergraduate project at the University of Moratuwa.

The device can emulate any solar PV module up to a maximum power of 400W, taking into account temperature and irradiance conditions. The user interface (this repository) allows the input of module parameters and environmental conditions. The device is also integrated with a Grafana dashboard for real time monitoring.

The frontend was migrated from `create-react-app` and the deprecated `material-ui` to using `Next.js` and `MUI` in 2023.


## 🌐 Live Preview

![screenshot](/docs/Screenshot.png)

A preview of the frontend is available at - https://pv-emulator.web.app

Sample data file - [Kyocera KC200GT](https://github.com/sathira10/pv-emulator/docs/kc200gt.json)


## 🛠️ Backend Integration

To get the app to fully function it's essential to run the backend locally. For detailed instructions, please refer to the backend repository.

Backend Repository: https://github.com/sathira10/pv-emulator-backend


## 🤝 Contributors

- Sathira Tennakoon
- Imasha Balahewa
- Hasitha Umayanga