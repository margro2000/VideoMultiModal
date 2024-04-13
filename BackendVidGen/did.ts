


export async function generateClip(text: string) {

    const sdk = require('api')('@d-id/v4.2.0#1a5wafgluf7lv4l');

    sdk.auth('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJvZHVjdF9pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vc3RyaXBlX2N1c3RvbWVyX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJvZHVjdF9uYW1lIjoidHJpYWwiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9zdWJzY3JpcHRpb25faWQiOiIiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9iaWxsaW5nX2ludGVydmFsIjoibW9udGgiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9wbGFuX2dyb3VwIjoiZGVpZC10cmlhbCIsImh0dHBzOi8vZC1pZC5jb20vc3RyaXBlX3ByaWNlX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJpY2VfY3JlZGl0cyI6IiIsImh0dHBzOi8vZC1pZC5jb20vY2hhdF9zdHJpcGVfc3Vic2NyaXB0aW9uX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jaGF0X3N0cmlwZV9wcmljZV9jcmVkaXRzIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jaGF0X3N0cmlwZV9wcmljZV9pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vcHJvdmlkZXIiOiJnb29nbGUtb2F1dGgyIiwiaHR0cHM6Ly9kLWlkLmNvbS9pc19uZXciOmZhbHNlLCJodHRwczovL2QtaWQuY29tL2FwaV9rZXlfbW9kaWZpZWRfYXQiOiIyMDI0LTA0LTEzVDIwOjUxOjAxLjI1N1oiLCJodHRwczovL2QtaWQuY29tL29yZ19pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vYXBwc192aXNpdGVkIjpbIlN0dWRpbyJdLCJodHRwczovL2QtaWQuY29tL2N4X2xvZ2ljX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jcmVhdGlvbl90aW1lc3RhbXAiOiIyMDI0LTA0LTEzVDIwOjQ5OjI4LjY2NloiLCJodHRwczovL2QtaWQuY29tL2FwaV9nYXRld2F5X2tleV9pZCI6ImV1NGJ4aWNwcmYiLCJodHRwczovL2QtaWQuY29tL3VzYWdlX2lkZW50aWZpZXJfa2V5IjoiSjZWZWdKaGJQWU1pd0VIQUsxOFE3IiwiaHR0cHM6Ly9kLWlkLmNvbS9oYXNoX2tleSI6InprdkRFV3NtTktkcVNOeDNJUEFkYiIsImh0dHBzOi8vZC1pZC5jb20vcHJpbWFyeSI6dHJ1ZSwiaHR0cHM6Ly9kLWlkLmNvbS9lbWFpbCI6ImRqYWNvYnM3QGdtYWlsLmNvbSIsImh0dHBzOi8vZC1pZC5jb20vcGF5bWVudF9wcm92aWRlciI6InN0cmlwZSIsImlzcyI6Imh0dHBzOi8vYXV0aC5kLWlkLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMjk4ODg5ODk4NjE3MzIzNzUxMiIsImF1ZCI6WyJodHRwczovL2QtaWQudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2QtaWQudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcxMzA0MTQ5MywiZXhwIjoxNzEzMTI3ODkzLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHJlYWQ6Y3VycmVudF91c2VyIHVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJHenJOSTFPcmU5Rk0zRWVEUmYzbTN6M1RTdzBKbFJZcSJ9.umQ19MEueIdPRS-uRt7ODhrrk1zCiIo7yaFx_RHakBwTAg3Li3wqmH1W3msHkkkt79W4uREoisD-ll9QfjhTA4ynmiKs5xP7KeEx1V3avuNQs_kGYBJTck0OBvzHbtRwWWFw6RRYaN3iiz2yfY7s5lZUxfkQfUroBD7hVJpM2cD2Eed9zdP803cy9cA45gFOwkuo_GrfkMDOm2aGfB4TT9H5w65IJ9yo9JT9HjpCuimlz6BgP_WRcEvx3hfCcJuWlRn3fGkvncsK-ncaDih252xONl_AwCBIkoNMKnqdv0rpssRbhMUaFTfHCduP3Smgar4HueW17Jb-o50IiwGidQ');
    return await sdk.createClip({
        script: {
            type: 'text',
            subtitles: 'false',
            provider: { type: 'microsoft', voice_id: 'en-US-JennyNeural' },
            ssml: 'false',
            input: 'sample text'
        },
        config: { result_format: 'mp4' },
        presenter_config: { crop: { type: 'wide' } },
        driver_id: 'a5PgMbeGQE',
        presenter_id: 'amy-Aq6OmGZnMt'
    })
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err));



}