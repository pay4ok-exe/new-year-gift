# Image Naming Guide

Place all your images in the `public/timeline/` folder with the following naming convention:

## Timeline Event Images

### 15.04.2025 - First Online Meeting

- `2025-04-15-first-online-meeting-1.jpg`
- `2025-04-15-first-online-meeting-2.jpg`
- `2025-04-15-first-online-meeting-3.jpg`
- (Add more as needed: `-4.jpg`, `-5.jpg`, etc.)

### 03.05.2025 - First Meet in Real

- `2025-05-03-first-meet-real-1.jpg`
- `2025-05-03-first-meet-real-2.jpg`
- `2025-05-03-first-meet-real-3.jpg`

### 25.05.2025 - Asking Being My Girlfriend

- `2025-05-25-asking-girlfriend-1.jpg`
- `2025-05-25-asking-girlfriend-2.jpg`
- `2025-05-25-asking-girlfriend-3.jpg`

### 05.07.2025 - In Aktobe

- `2025-07-05-aktobe-1.jpg`
- `2025-07-05-aktobe-2.jpg`
- `2025-07-05-aktobe-3.jpg`

### 28.08.2025 - In Almaty - My Birthday

- `2025-08-28-almaty-birthday-1.jpg`
- `2025-08-28-almaty-birthday-2.jpg`
- `2025-08-28-almaty-birthday-3.jpg`

### 29.08.2025 - Tour Trip Together (Kolsay)

- `2025-08-29-kolsay-tour-1.jpg`
- `2025-08-29-kolsay-tour-2.jpg`
- `2025-08-29-kolsay-tour-3.jpg`

### 01.09.2025 - Come to Astana

- `2025-09-01-astana-1.jpg`
- `2025-09-01-astana-2.jpg`
- `2025-09-01-astana-3.jpg`

### 25.11.2025 - 6 Months of Relationship

- `2025-11-25-6-months-1.jpg`
- `2025-11-25-6-months-2.jpg`
- `2025-11-25-6-months-3.jpg`

### 01.01.2026 - New Year

- `2026-01-01-new-year-1.jpg`
- `2026-01-01-new-year-2.jpg`
- `2026-01-01-new-year-3.jpg`

### 16.01.2026 - Your Birthday in Aktobe (BLURRED)

- `2026-01-16-her-birthday-1.jpg`
- `2026-01-16-her-birthday-2.jpg`
- `2026-01-16-her-birthday-3.jpg`

### 14.02.2026 - Tour to Almaty - Shymbulak (BLURRED)

- `2026-02-14-shymbulak-1.jpg`
- `2026-02-14-shymbulak-2.jpg`
- `2026-02-14-shymbulak-3.jpg`

## Folder Structure

```
public/
  timeline/
    2025-04-15-first-online-meeting-1.jpg
    2025-04-15-first-online-meeting-2.jpg
    2025-04-15-first-online-meeting-3.jpg
    2025-05-03-first-meet-real-1.jpg
    ... (all other images)
```

## Notes

- You can add more images to any event by adding more numbered files (e.g., `-4.jpg`, `-5.jpg`)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- The images will automatically appear in the timeline and gallery sections
- Images for future events (16.01.2026 and 14.02.2026) will be blurred until you update the `isBlurred` property in `src/lib/data.ts`

## Adding More Images

To add more images to an event, simply:

1. Add the image file to `public/timeline/` with the correct naming
2. Update the `images` array in `src/lib/data.ts` for that event

Example:

```typescript
{
    date: '15.04.2025',
    title: 'First Online Meeting',
    description: 'Best thing which happens this year',
    emoji: '💻',
    images: [
        '/timeline/2025-04-15-first-online-meeting-1.jpg',
        '/timeline/2025-04-15-first-online-meeting-2.jpg',
        '/timeline/2025-04-15-first-online-meeting-3.jpg',
        '/timeline/2025-04-15-first-online-meeting-4.jpg', // Add this
    ]
}
```
