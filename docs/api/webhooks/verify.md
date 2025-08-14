---
title: Verify
---

# Verify
:::subtitle
Learn how to verify the authenticity of LiveSession webhook requests.
:::

## Quickstart
Before you proceed with responding to a webhook, it's crucial to ensure that the webhook originated from LiveSession.
This verification can be accomplished by calculating a digital signature.

Every webhook request incorporates a base64-encoded HMAC-SHA256 signature included in `LiveSession-Signature` header.
This header is created using the webhook's secret in conjunction with the data transmitted in the request.

To compute the HMAC digest, follow below written algorithm:

:::tabs{kind="secondary"}
1. [Node.js](type=node)
    ```js
    import crypto from 'crypto';

    // Your webhook secret key
    const secretKey = 'your_secret_key_here';

    // Received data from the webhook payload
    const receivedData = 'received_data_here';

    // Received base64-encoded HMAC signature from the webhook headers
    const receivedSignatureBase64 = 'received_signature_here'; // Replace with actual received signature

    // Function to compute HMAC-SHA256 signature and return base64-encoded result
    function computeHmacSha256Base64(data, secretKey) {
        const hmac = crypto.createHmac('sha256', secretKey);
        hmac.update(data);

        return hmac.digest('base64');
    }

    // Calculate the base64-encoded HMAC-SHA256 signature for the received data
    const calculatedSignatureBase64 = computeHmacSha256Base64(receivedData, secretKey);

    // Compare the received signature with the calculated signature
    if (receivedSignatureBase64 === calculatedSignatureBase64) {
        console.log('Webhook signature is valid. Request is authentic.');
    } else {
        console.log('Webhook signature is invalid. Request might be tampered.');
    }
    ```

2. [Python](type=python)
    ```python
    import hmac
    import hashlib
    import base64

    # Your webhook secret key (convert to bytes if not already)
    secret_key = b'your_secret_key_here'

    # Received data from the webhook payload (convert to bytes if not already)
    received_data = b'received_data_here'

    # Received base64-encoded HMAC signature from the webhook headers
    received_signature_base64 = "received_signature_here"  # Replace with actual received signature

    # Function to compute HMAC-SHA256 signature and return base64-encoded result
    def compute_hmac_sha256_base64(data, secret_key):
        hashed = hmac.new(secret_key, data, hashlib.sha256)
        return base64.b64encode(hashed.digest()).decode('utf-8')

    # Calculate the base64-encoded HMAC-SHA256 signature for the received data
    calculated_signature_base64 = compute_hmac_sha256_base64(received_data, secret_key)

    # Compare the received signature with the calculated signature
    if received_signature_base64 == calculated_signature_base64:
        print("Webhook signature is valid. Request is authentic.")
    else:
        print("Webhook signature is invalid. Request might be tampered.")
    ```
:::
