# Lab 6
<img width="801" height="503" alt="Lab 6 1" src="https://github.com/user-attachments/assets/7d81d841-4c4c-4819-af2e-5f11c5532fa8" />
[Lab 6.1.html](https://github.com/user-attachments/files/23757545/Lab.6.1.html)<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Lab 6 Leaflet</title>


    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />


    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>


    <script type="text/javascript" src="https://leafletjs.com/examples/choropleth/us-states.js"></script>

</head>

<body>

    <div id="mapid" style="height: 500px; width: 800px; border: 1px solid #000;"></div>

    <script>
     
        var map = L.map("mapid").setView([39.74739, -106], 4);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors"
        }).addTo(map);


        L.geoJson(statesData).addTo(map);




        var myPoint = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        var myLines = [
            { "type": "LineString", "coordinates": [[-100, 40], [-105, 45], [-110, 55]] },
            { "type": "LineString", "coordinates": [[-105, 40], [-110, 45], [-115, 55]] }
        ];

        var myPolys = [
            {
                "type": "Feature",
                "properties": { "party": "Republican" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-104.05, 48.99],
                        [-97.22, 48.98],
                        [-96.58, 45.94],
                        [-104.03, 45.94],
                        [-104.05, 48.99]
                    ]]
                }
            },
            {
                "type": "Feature",
                "properties": { "party": "Democrat" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-109.05, 41.00],
                        [-102.06, 40.99],
                        [-102.03, 36.99],
                        [-109.04, 36.99],
                        [-109.05, 41.00]
                    ]]
                }
            }
        ];

        L.geoJSON(myPoint).addTo(map);

        var myStyle = { color: "#ff7800", weight: 5, opacity: 0.65 };
        L.geoJSON(myLines, { style: myStyle }).addTo(map);

        L.geoJSON(myPolys, {
            style: function (feature) {
                switch (feature.properties.party) {
                    case "Republican": return { color: "#ff0000" };
                    case "Democrat": return { color: "#0000ff" };
                }
            }
        }).addTo(map);

    </script>

</body>
</html>


<img width="944" height="638" alt="Lab 6 2" src="https://github.com/user-attachments/assets/fa8e0882-152f-462e-a894-a8163db5f585" />

<img width="956" height="643" alt="Lab 6 3" src="https://github.com/user-attachments/assets/253aa123-ce1e-44fd-b516-4167109f4cc8" />

<img width="957" height="637" alt="Custom Map" src="https://github.com/user-attachments/assets/24ecc2e8-ebdf-4616-ac98-e862cdef42ca" />

