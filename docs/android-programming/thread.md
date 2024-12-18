---
sidebar_position: 1
---


# Thread

## First sight
An application will always has a **Main thread**

Only use UI toolkit on UI thread.

If needed, use `View.post` with `Runable`


## Example

1. Using AsyncTask with thread to display the download progress. Users can still interact with the main screen.

2.
