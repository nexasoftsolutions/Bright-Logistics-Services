# Sanity CMS Schema Plan - Bright Logistics Corporate Portal

This document outlines the recommended Sanity CMS schemas to make the content of the Bright Logistics Corporate Portal fully dynamic.

## 1. Blog & News (`post`, `category`, `author`)
To manage the news and insights page.
* **Fields:** Title, Slug, Main Image, Published Date, Author, Categories, and Body (Rich Text / Portable Text).

## 2. Services (`service`)
To manage the grid on the "Our Services" and "Home" pages.
* **Fields:** Title, Slug, Icon (or Image), Short Description (for cards), Detailed Description, and Status (Active/Inactive).

## 3. Fleet & Equipment (`fleetVehicle`)
To manage the vehicle breakdown on the "Fleet" page.
* **Fields:** Vehicle Name/Type (e.g., Flatbed, Refrigerated), Image, Payload Capacity, Key Features, and Total Units available.

## 4. Industries We Serve (`industry`)
To manage the specific sectors catered to on the "Industries" page.
* **Fields:** Industry Name, Background Image/Icon, Short Summary, and Key Logistics Solutions provided for that sector.

## 5. Clients & Testimonials (`client`, `testimonial`)
To manage the "Clients" page logos and reviews.
* **Client Fields:** Company Name, Company Logo.
* **Testimonial Fields:** Quote/Feedback, Client Name, Client Designation, and Associated Company Logo.

## 6. Gallery (`galleryImage`)
To manage the masonry layout on the "Gallery" page with filtering.
* **Fields:** Title/Caption, Image File, and Category (e.g., *Warehouse*, *Fleet*, *Containers* - to power the filter buttons).

## 7. Team / Leadership (`teamMember`)
To manage the leadership section on the "About Us" and "Contact" pages.
* **Fields:** Full Name, Designation (e.g., Director), Profile Picture, Short Bio, and Direct Contact Info (Phone/Email).

## 8. Global Site Settings (`siteSettings`) - *Singleton*
To manage global data that appears in headers, footers, and contact pages.
* **Fields:** Main Phone Number, WhatsApp Number, Support Email, Headquarters Address, Social Media Links, and Global SEO Meta Tags.
