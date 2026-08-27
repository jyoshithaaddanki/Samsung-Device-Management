let devices = JSON.parse(localStorage.getItem("samsungDevices")) || [];

function addDevice() {

    const deviceName = document.getElementById("deviceName").value;
    const deviceType = document.getElementById("deviceType").value;
    const model = document.getElementById("model").value;
    const owner = document.getElementById("owner").value;
    const status = document.getElementById("status").value;

    if (deviceName === "" || model === "" || owner === "") {
        alert("Please fill all fields");
        return;
    }

    const device = {
        id: Date.now(),
        name: deviceName,
        type: deviceType,
        model: model,
        owner: owner,
        status: status
    };

    devices.push(device);

    localStorage.setItem(
        "samsungDevices",
        JSON.stringify(devices)
    );

    alert("Device added successfully!");

    document.getElementById("deviceName").value = "";
    document.getElementById("model").value = "";
    document.getElementById("owner").value = "";

    displayDevices();
}

function displayDevices(data = devices) {

    const list = document.getElementById("deviceList");

    list.innerHTML = "";

    data.forEach(device => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${device.name}</td>
            <td>${device.type}</td>
            <td>${device.model}</td>
            <td>${device.owner}</td>
            <td>${device.status}</td>
        `;

        list.appendChild(row);
    });
}

function searchDevice() {

    const searchText =
        document.getElementById("search").value.toLowerCase();

    const filtered = devices.filter(device =>
        device.name.toLowerCase().includes(searchText) ||
        device.model.toLowerCase().includes(searchText)
    );

    displayDevices(filtered);
}

displayDevices();