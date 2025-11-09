# Meaux Cloud - Internal Company Workspace

MeauxCloud is a comprehensive internal workspace platform that provides email, video calls, streaming, dashboard, file management, and more for company-wide collaboration.

## Features

### 📊 Dashboard
- Quick stats overview (unread emails, meetings, tasks, files)
- Recent activity feed
- Upcoming events calendar
- Quick action buttons for common tasks

### 📧 Email
- Full-featured email client with inbox, sent, drafts, starred, and trash folders
- Email preview pane
- Star/unstar emails
- Compose, reply, and forward functionality

### 📹 Video Calls
- Start instant video calls
- View scheduled meetings
- Quick join with meeting codes
- Meeting participant information

### 🎥 Streaming
- Live streaming capabilities
- View active streams with viewer counts
- Access past stream recordings
- Go live to broadcast to your team

### 📅 Calendar
- Monthly calendar view
- Event scheduling
- Visual indicators for days with events
- Navigate between months

### ✓ Tasks
- Task management with priorities (high, medium, low)
- Checkbox to mark tasks as complete
- Due date tracking
- Visual completion states

### 📁 Files
- File storage and management
- Search functionality
- Sortable file list (by name, date, size)
- File type icons and metadata display

## Getting Started

### Opening the Workspace

Simply open `index.html` in a modern web browser to launch the Meaux Cloud workspace.

### Using a Local Server

For the best experience, serve the files using a local web server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (with http-server)
npx http-server -p 8080
```

Then navigate to `http://localhost:8080` in your browser.

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality and navigation
├── README.md       # This file
└── LICENSE         # License information
```

## Browser Compatibility

The workspace is designed to work with modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks required)

## Responsive Design

The workspace includes responsive breakpoints for optimal viewing on:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## Future Enhancements

This is a demo/prototype workspace. For production use, consider adding:
- Backend integration for real email, video, and file services
- User authentication and authorization
- Real-time notifications
- Database integration for persistent data
- WebRTC for actual video calling
- Streaming server integration
- API endpoints for all features

## License

See LICENSE file for details.
