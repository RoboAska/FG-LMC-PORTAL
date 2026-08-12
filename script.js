/* ============================================
   FG LMC LOCATION DIRECTORY
============================================ */


/* ============================================
   LOCATION DATA
============================================ */

const locations = [

    {
        id: 1,

        whName: "MRT PARANAQUE",

        whCode: "1005",

        district: "Paranaque",

        type: "WAREHOUSE",

        area: "GMM",

        exactLocation:
            "WH 11 Villa Olivarez, Juanita de Leon St., Bgy. San Dionisio, Paranaque City",

        latitude: 14.47961,

        longitude: 120.9934,

        contactPerson:
            "RHEA FIDELIA",

        contactNumber:
            "09622117247",

        email:
            "fiberhome_bicol@aai.com.ph"

    },


    {
        id: 2,

        whName: "IPG LAGUNA",

        whCode: "1041",

        district: "LAGUNA",

        type: "WAREHOUSE",

        area: "SLZ",

        exactLocation:
            "Building 14, Lepanto Industrial Complex, KM 54, Maharlika Highway Calamba City, Laguna",

        latitude: 14.164963,

        longitude: 121.133601,

        contactPerson:
            "Dominador Z. Maranion II",

        contactNumber:
            "09063129819",

        email:
            "whsupervisor01@ipginfo.com"

    },


    {
        id: 3,

        whName: "MRT PAMPANGA",

        whCode: "1023",

        district: "Pampanga",

        type: "WAREHOUSE",

        area: "NLZ",

        exactLocation:
            "Lot 23A & Lot 23B, Global Aseana Business Park, Quezon Road, San Fernando, Pampanga",

        latitude: 15.015389,

        longitude: 120.740094,

        contactPerson:
            "Regino E. Carlos",

        contactNumber:
            "09513054951",

        email:
            "shania.campo@meritar.cn"

    },


    {
        id: 4,

        whName: "INTELUCK-BULACAN",

        whCode: "1047",

        district: "Bulacan",

        type: "WAREHOUSE",

        area: "NLZ",

        exactLocation:
            "55 Mighty Road, Barangay Tikay, Malolos City, Bulacan",

        latitude: 14.841068,

        longitude: 120.857794,

        contactPerson:
            "John Carlo Arcilla",

        contactNumber:
            "09209263309",

        email:
            ""

    },


    {
        id: 5,

        whName: "BULACAN",

        whCode: "3007",

        district: "Bulacan",

        type: "STOCKYARD",

        area: "NLZ",

        exactLocation:
            "Jolly Industrial Park Pulilan-Baliuag Bypass Road, Pulilan, Bulacan",

        latitude: 14.92467,

        longitude: 120.812823,

        contactPerson:
            "Kern Nicolas",

        contactNumber:
            "09759682171",

        email:
            ""

    },


    {
        id: 6,

        whName: "MRT-CEBU 2",

        whCode: "1045",

        district: "Naga, CEBU",

        type: "WAREHOUSE",

        area: "CEBU",

        exactLocation:
            "Purok 5, Sitio Hurnayan, Brgy. Pandan, Naga City, CEBU",

        latitude: null,

        longitude: null,

        contactPerson:
            "Glenn Alejandria",

        contactNumber:
            "09154613781",

        email:
            "glenn@meritar.cn"

    },


    {
        id: 7,

        whName: "MRT BACOLOD",

        whCode: "1046",

        district: "VIS",

        type: "MERITAR",

        area: "BACOLOD",

        exactLocation:
            "Warehouse No. K18K2, Circumferential Road, Barangay Banago, Bacolod, 6100 Negros Occidental",

        latitude: 10.7048127,

        longitude: 122.9579842,

        contactPerson:
            "Gilbert Ferrer",

        contactNumber:
            "09633243680",

        email:
            "lackey.ni@meritar.cn"

    },


    {
        id: 8,

        whName: "IPG DAVAO",

        whCode: "1043",

        district: "DAVAO",

        type: "WAREHOUSE",

        area: "MIN",

        exactLocation:
            "Bunawan (Pob.), Bunawan, Davao City, Davao del Sur",

        latitude: 7.224214,

        longitude: 125.637112,

        contactPerson:
            "Erwin Perez",

        contactNumber:
            "09451038935",

        email:
            "whsupervisor03@ipginfo.com"

    }

];



/* ============================================
   MAP VARIABLES
============================================ */

let map = null;

let marker = null;

let selectedLocation = null;



/* ============================================
   LOAD WEBSITE
============================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderTable();

        setupKeyboard();

    }
);



/* ============================================
   RENDER TABLE
============================================ */

function renderTable() {

    const table =
        document.getElementById(
            "locationTable"
        );


    table.innerHTML = "";


    locations.forEach(
        function (location, index) {


            const row =
                document.createElement("tr");


            let coordinateHTML = "-";


            if (
                location.latitude !== null &&
                location.longitude !== null
            ) {

                coordinateHTML = `

                    <div class="coordinates">

                        <span>
                            Lat: ${location.latitude}
                        </span>

                        <span>
                            Long: ${location.longitude}
                        </span>

                    </div>

                `;

            }


            let badgeClass =
                "badge-meritar";


            if (
                location.type ===
                "WAREHOUSE"
            ) {

                badgeClass =
                    "badge-warehouse";

            }


            if (
                location.type ===
                "STOCKYARD"
            ) {

                badgeClass =
                    "badge-stockyard";

            }


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>


                <td>

                    <div class="wh-name">
                        ${escapeHTML(
                            location.whName
                        )}
                    </div>

                </td>


                <td>
                    ${escapeHTML(
                        location.whCode
                    )}
                </td>


                <td>
                    ${escapeHTML(
                        location.district
                    )}
                </td>


                <td>

                    <span
                        class="badge ${badgeClass}"
                    >

                        ${escapeHTML(
                            location.type
                        )}

                    </span>

                </td>


                <td>

                    ${
                        location.area
                            ? escapeHTML(
                                location.area
                            )
                            : "-"
                    }

                </td>


                <td>

                    ${escapeHTML(
                        location.exactLocation
                    )}

                </td>


                <td>

                    ${coordinateHTML}

                </td>


                <td>

                    ${
                        location.contactPerson
                            ? escapeHTML(
                                location.contactPerson
                            )
                            : "-"
                    }

                </td>


                <td>

                    ${
                        location.contactNumber
                            ? escapeHTML(
                                location.contactNumber
                            )
                            : "-"
                    }

                </td>


                <td>

                    ${
                        location.email
                            ? escapeHTML(
                                location.email
                            )
                            : "-"
                    }

                </td>


                <td>

                    <button
                        class="view-btn"
                        onclick="
                            viewLocation(
                                ${location.id}
                            )
                        "
                    >

                        👁 VIEW

                    </button>

                </td>

            `;


            table.appendChild(row);

        }
    );

}



/* ============================================
   VIEW LOCATION
============================================ */

function viewLocation(id) {

    const location =
        locations.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!location) {

        return;

    }


    selectedLocation =
        location;



    /* =====================================
       HEADER
    ====================================== */

    document
        .getElementById("modalName")
        .textContent =
            location.whName;


    document
        .getElementById("modalCode")
        .textContent =
            "WH CODE: " +
            location.whCode;



    /* =====================================
       LOCATION INFORMATION
    ====================================== */

    document
        .getElementById("infoCode")
        .textContent =
            location.whCode;


    document
        .getElementById("infoDistrict")
        .textContent =
            location.district;


    document
        .getElementById("infoType")
        .textContent =
            location.type;


    document
        .getElementById("infoArea")
        .textContent =
            location.area || "-";


    document
        .getElementById("infoAddress")
        .textContent =
            location.exactLocation;



    /* =====================================
       CONTACT INFORMATION
    ====================================== */

    document
        .getElementById("infoContact")
        .textContent =
            location.contactPerson || "-";


    document
        .getElementById("infoNumber")
        .textContent =
            location.contactNumber || "-";


    document
        .getElementById("infoEmail")
        .textContent =
            location.email || "-";



    /* =====================================
       COORDINATES
    ====================================== */

    if (
        location.latitude !== null &&
        location.longitude !== null
    ) {

        document
            .getElementById("infoLatitude")
            .textContent =
                location.latitude;


        document
            .getElementById("infoLongitude")
            .textContent =
                location.longitude;


        document
            .getElementById("mapCoordinates")
            .textContent =
                `${location.latitude}, ${location.longitude}`;

    }

    else {

        document
            .getElementById("infoLatitude")
            .textContent =
                "Not available";


        document
            .getElementById("infoLongitude")
            .textContent =
                "Not available";


        document
            .getElementById("mapCoordinates")
            .textContent =
                "Coordinates not available";

    }



    /* =====================================
       OPEN MODAL
    ====================================== */

    document
        .getElementById("locationModal")
        .classList
        .add("show");



    /* =====================================
       LOAD MAP
    ====================================== */

    setTimeout(
        function () {

            loadMap(location);

        },
        100
    );

}



/* ============================================
   LOAD MAP
============================================ */

function loadMap(location) {


    /* Remove previous map */

    if (map !== null) {

        map.remove();

        map = null;

    }


    const mapElement =
        document.getElementById(
            "map"
        );


    /* No coordinates */

    if (
        location.latitude === null ||
        location.longitude === null
    ) {

        mapElement.innerHTML = `

            <div class="no-map">

                📍 Coordinates are not available
                for this location.

            </div>

        `;

        return;

    }


    /* Clear map */

    mapElement.innerHTML = "";


    /* Create map */

    map =
        L.map("map");


    map.setView(
        [
            location.latitude,
            location.longitude
        ],
        16
    );


    /* OpenStreetMap */

    L.tileLayer(

        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

            maxZoom: 19,

            attribution:
                "&copy; OpenStreetMap contributors"

        }

    ).addTo(map);



    /* Marker */

    marker =
        L.marker(
            [
                location.latitude,
                location.longitude
            ]
        )
        .addTo(map);


    marker
        .bindPopup(
            `
                <strong>
                    ${escapeHTML(
                        location.whName
                    )}
                </strong>

                <br>

                WH Code:
                ${escapeHTML(
                    location.whCode
                )}
            `
        )
        .openPopup();



    /* Fix map size */

    setTimeout(
        function () {

            map.invalidateSize();

        },
        200
    );

}



/* ============================================
   GOOGLE MAPS
============================================ */

function openGoogleMaps() {

    if (!selectedLocation) {

        return;

    }


    if (
        selectedLocation.latitude === null ||
        selectedLocation.longitude === null
    ) {

        alert(
            "Coordinates are not available for this location."
        );

        return;

    }


    const url =
        "https://www.google.com/maps?q=" +
        selectedLocation.latitude +
        "," +
        selectedLocation.longitude;


    window.open(
        url,
        "_blank"
    );

}



/* ============================================
   CLOSE LOCATION
============================================ */

function closeLocation() {

    document
        .getElementById("locationModal")
        .classList
        .remove("show");


    selectedLocation =
        null;


    if (map !== null) {

        map.remove();

        map = null;

    }

}



/* ============================================
   ESCAPE KEY
============================================ */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                closeLocation();

            }

        }
    );

}



/* ============================================
   CLICK OUTSIDE MODAL
============================================ */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "locationModal"
            );


        if (
            event.target === modal
        ) {

            closeLocation();

        }

    }
);



/* ============================================
   HTML SECURITY
============================================ */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}