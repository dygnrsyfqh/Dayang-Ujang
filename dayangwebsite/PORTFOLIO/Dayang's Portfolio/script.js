function showPoll() {
    const poll = document.getElementById("poll");
    if (poll) {
      poll.style.display = poll.style.display === "none" ? "block" : "none";
    }
  }