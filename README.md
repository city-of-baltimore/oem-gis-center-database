# oem-gis-center-database
Access the deployed app at: https://city-of-baltimore.github.io/oem-gis-center-database/. Enable popups to allow the Esri login page to appear.
Supported Functionalities: add layer, delete layer, delete template, add category, delete category
## Layer Fields
- Scope: The geographical scope of the layer. In the dashboard app, the scope will be joined to the title to create the layer title.
- For example, a layer with title “Neighborhoods” and scope “Baltimore” will appear as “Baltimore Neighborhoods” in OEM GIS Center.
- Title: The title of the layer.
- URL: The ArcGIS feature service URL for the layer. ArcGIS feature services may contain multiple layers, which are denoted by the numerical suffix at the end of the URL.
  For example, https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/Neighborhood/FeatureServer/0 is the first (0-indexed) layer in the Neighborhood feature server.
  If the layer is not specified, ArcGIS typically uses the first layer in the feature server.
  To reduce network request time, always specify the layer index, even if the feature service only contains 1 layer.
  For example, use https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/Neighborhood/FeatureServer/0 instead of
  https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/Neighborhood/FeatureServer.
- Source: The author or source of the layer.
- Description: A description of the layer metadata.
- Category ID: The ID of the associated category from the Categories table.
- Renderer (Optional): Used to specify a custom [Renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html) for the layer in JSON format.
  If not specified, the default renderer from the layer URL will be used. See also the [Symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html) API.
- Filter (Optional): A SQL filter to be applied server-side to the retrieved layer data. Only regular SQL WHERE clauses should be entered, and this field should only be used with Feature Layers.
  See this Filter a Feature Layer [Tutorial](https://developers.arcgis.com/javascript/latest/filter-a-feature-layer-with-sql/#apply-the-sql-expression) for more information.
## Other Edits
- Rename or edit entries by double clicking directly in the table and entering the new value.
- Batch upload/download, add/remove fields, and make other edits by going to the ArcGIS Online [item](https://baltimore.maps.arcgis.com/home/item.html?id=92dc71eaff8b46e49b2d4aff0e24ef60).
