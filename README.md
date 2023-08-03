
# Panama


The Panama Streaming APIs provide a backend solution for the Panama social media app. These APIs enable radios, podcasters, and content creators to live stream their content and interact with their audience in an engaging way.




![Logo](https://image.winudf.com/v2/image1/bWl2LmFzdHVkaW9faWNvbl8xNTk2NzkyNzM3XzA0NA/icon.png?w=184&fakeurl=1)


## Stack Used

The Panama Streaming APIs are built using the following technologies:

- Node.js: JavaScript runtime for server-side development
- Express.js: Web application framework for building APIs
- Video.js: HTML5-based video player for streaming media
- Faker: Library for generating random data (used for simulating video stream URLs)

## Endpoints

### Radio Streams API

The Radio Streams API provides access to a list of available radio streams for live streaming in the Panama app.

**Endpoint: GET /api/radio-streams**

Returns a JSON array of radio streams, each containing the following properties:
- `id`: The unique identifier of the radio stream.
- `name`: The name of the radio stream.
- `url`: The URL for the radio stream.

Example Response:
```json
[
  { "id": 1, "name": "Radio Channel 1", "url": "http://stream.url/radio1" },
  { "id": 2, "name": "Radio Channel 2", "url": "http://stream.url/radio2" },
  
]
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Neo-dash/panama-api.git
```

Go to the project directory

```bash
  cd panama-api
```

Install dependencies

```bash
  npm install
```


Start the Faker server

```bash
  node streamServer.js
```
Start the node api

```bash
  node index.js
```

