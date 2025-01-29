# Scoreboard API Service Specification

## Overview

This document specifies the requirements and design for the Scoreboard API Service, which will manage user scores and update the scoreboard in real-time.

## Features

1. **Live Scoreboard Update** - Display the top 10 users' scores and update them dynamically.
2. **User Score Management** - Allow users to increase their scores upon completing an action.
3. **API Security** - Prevent unauthorized score manipulation.

---

## API Endpoints

### 1. Update User Score
**Endpoint:** `POST /api/score/update`

**Description:** Updates a user's score when they complete an action.

**Request Headers:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>",
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "user_id": "string",
  "score_increment": "integer"
}
```

**Response:**
```json
{
  "status": "success",
  "new_score": 1000
}
```

**Validations:**
- Ensure `user_id` is valid.
- Ensure `score_increment` is within a predefined range.
- Verify authentication and authorization via JWT.

---

### 2. Fetch Top 10 Scores
**Endpoint:** `GET /api/score/top`

**Description:** Retrieves the top 10 users with the highest scores.

**Response:**
```json
{
  "top_scores": [
    { "user_id": "123", "score": 1500 },
    { "user_id": "456", "score": 1400 }
  ]
}
```

**Performance Consideration:**
- Cached response for efficiency.
- Indexed database queries for fast retrieval.

---

## Security Considerations

1. **Authentication:** Users must be authenticated using JWT tokens.
2. **Rate Limiting:** Prevent API abuse by limiting score updates per user per minute.

---

## Database Schema

```sql
CREATE TABLE scores (
    user_id VARCHAR(50) PRIMARY KEY,
    score INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Real-time Update Mechanism
- Use WebSockets (`/ws/scoreboard`) to push live scoreboard updates to clients.

---

## Suggested Improvements
1. **Leaderboard Reset Mechanism** - Allow periodic resets for seasonal competitions.
2. **User Score History** - Store score changes for analytics.

---

## Execution Flow Diagram

