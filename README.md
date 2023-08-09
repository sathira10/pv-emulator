# Photovoltaic Emulator Frontend

This repository hosts the user interface for a Photovoltaic Emulator hardware device, which was designed as part of the final year undergraduate project at the University of Moratuwa.

The hardware device can emulate any solar PV module up to a maximum power of 400W, taking into account temperature and irradiance conditions. The user interface (this repository) allows the input of module parameters and environmental conditions. It is also integrated with a `grafana` dashboard for real time monitoring.

The frontend was migrated from `create-react-app` and the deprecated `material-ui` to using `Next.js` and `MUI` in 2023.


## 🌐 Live Preview

![screenshot](/docs/Screenshot.png)

A preview of the frontend is available at - https://pv-emulator.web.app

Sample data file - [Kyocera KC200GT](https://raw.githubusercontent.com/sathira10/pv-emulator/main/docs/kc200gt.json)


## 🛠️ Backend Integration

To get the UI to fully function it's essential to run the backend locally. For detailed instructions, please refer to the backend repository.

Backend Repository: https://github.com/sathira10/pv-emulator-backend


## 🤝 Contributors

- Sathira Tennakoon
- Imasha Balahewa
- Hasitha Umayanga