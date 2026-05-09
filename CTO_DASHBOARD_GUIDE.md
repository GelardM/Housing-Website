# CTO Dashboard - Complete Guide

## Overview

The CTO Dashboard is a comprehensive administrative interface that provides full control over the CHP Homes website. Only users with the **CTO (Chief Technology Officer)** role can access this powerful management system.

## Access & Authentication

### Login Requirements
- **URL**: `/admin` (automatically redirects to `/portal` if not authenticated)
- **Email**: `cto@communityhousing.com`
- **Password**: `password123` (change this in production!)
- **Session Duration**: 7 days (JWT token)

### Access Control
- Only CTO role can access the dashboard
- OWNER and regular users are restricted from the admin panel
- All actions are tied to your authenticated session

---

## Dashboard Features

### 1. **📊 Overview Section**

At the top of the dashboard, you'll see:
- **Global Occupancy Ratio**: Shows total vacant vs occupied units
- **Units by Category**: Visual breakdown of listings by type (Bedsitter, 1-Bedroom, etc.)

### 2. **📝 Listings Management Tab**

#### Add New Listing
1. Click **"➕ Add New Listing"** button
2. Fill in the form with:
   - **Title** (e.g., "Sunny Bedsitter")
   - **Description** (detailed property info)
   - **Location** (e.g., "Mirema")
   - **Price** (in KES)
   - **Unit Type** (Bedsitter, 1-Bedroom, 2-Bedroom, or 3-Bedroom)
   - **Thumbnail Image** (drag-drop or click to upload)
   - **Status** (Vacant/Occupied toggle)
3. Click **"Create Listing"** to save

#### Edit Existing Listing
1. Find the listing in the list
2. Click the **"Edit"** button
3. Update any fields
4. Click **"Update Listing"** to save changes

#### Toggle Availability Status
1. Find the listing
2. Click **"Toggle Status"** button
3. Changes are saved immediately
4. Status badge color updates (green = vacant, red = occupied)

#### Delete Listing
1. Click **"Delete"** button
2. Confirm in the modal dialog
3. Listing is removed permanently

#### Search & Filter Listings
- **Search by Title/Location**: Use the search bar to find listings
- **Filter by Type**: Select a unit type (Bedsitter, 1-Bedroom, etc.)
- **Filter by Status**: Choose Vacant or Occupied
- Filters work together (e.g., vacant 2-bedroom units)

### 3. **⚙️ Global Content Tab**

Manage site-wide content:

#### Site Title
- Appears in browser tab and meta tags
- Default: "CHP Homes"

#### Tagline
- Short slogan or descriptor
- Default: "Homes that grow with community"

#### About Section Text
- Main content for the About page
- Supports longer text descriptions
- Update to reflect your organization's mission

#### Save Changes
- Click **"💾 Save Global Content"** button
- Changes apply immediately to the website

---

## Image Management

### Upload Images
All image uploads use a **secure drag-and-drop interface**:

1. **Drag & Drop Method**:
   - Drag image file directly onto the upload area
   - Release to upload

2. **Click to Browse Method**:
   - Click the upload area
   - Select file from your computer

### Supported Formats
- PNG, JPG, JPEG, GIF, WebP
- Maximum file size: 5MB
- Images are optimized automatically

### Image Preview
- See a preview of uploaded images before saving
- Images are stored in `/public/uploads/`
- URLs are automatically generated and saved

---

## User Interface Features

### Status Badges
- **Green Badge** (✓ Vacant): Property is available for booking
- **Red Badge** (✗ Occupied): Property is currently occupied
- Instantly update by clicking "Toggle Status"

### Notifications
- **Success (✅)**: Green notification after successful action
- **Error (❌)**: Red notification if something goes wrong
- **Info (ℹ️)**: Blue notification for system messages
- Auto-dismiss after 4 seconds (can click X to close)

### Confirmation Dialogs
- Delete actions require confirmation
- Modal prevents accidental deletion
- Clear action description

---

## API Endpoints Used

The dashboard uses these backend endpoints:

### Listing Operations
- `GET /api/listings` - Fetch all listings
- `POST /api/listings` - Create new listing
- `PATCH /api/listings/[id]` - Update listing
- `DELETE /api/listings/[id]` - Delete listing

### File Upload
- `POST /api/uploads` - Upload image file

### Global Content
- `PATCH /api/content` - Update site content

---

## Best Practices

### 1. **Descriptions**
- Write clear, detailed property descriptions
- Include amenities, condition, and key features
- Use concise language (under 200 characters recommended)

### 2. **Images**
- Use high-quality, well-lit photos
- Landscape orientation works best (1200x800px)
- Remove duplicate listings to keep database clean

### 3. **Pricing**
- Keep prices up-to-date
- Review and adjust based on market conditions
- Use whole numbers (no decimal prices)

### 4. **Status Management**
- Mark units as "Occupied" when rented
- Update to "Vacant" when available again
- This keeps availability accurate for users

### 5. **Content Updates**
- Review global content periodically
- Update site tagline seasonally if needed
- Keep About section fresh and accurate

---

## Troubleshooting

### Image Upload Issues
**Problem**: "File size must be less than 5MB"
- **Solution**: Compress image before uploading

**Problem**: "Only images are allowed"
- **Solution**: Ensure file is PNG, JPG, GIF, or WebP format

### Form Submission Issues
**Problem**: Required fields showing as empty
- **Solution**: All fields marked with * are mandatory

**Problem**: "Failed to save listing"
- **Solution**: Check network connection, try again

### Session Timeout
**Problem**: Dashboard shows login page
- **Solution**: Session expired. Log back in with your credentials

---

## Future Enhancements

Potential features to add:
- ✨ Bulk import of listings via CSV
- ✨ Image gallery management (add multiple photos per listing)
- ✨ Advanced analytics dashboard
- ✨ Booking management interface
- ✨ Email notifications for bookings
- ✨ Audit logs for all changes
- ✨ Two-factor authentication (2FA)
- ✨ Role-based permissions (multiple admin levels)

---

## Support

For technical issues or questions:
1. Check this documentation first
2. Review error messages and notifications
3. Contact the development team with screenshot of the issue
4. Include which feature you were using

---

**Last Updated**: May 8, 2026
