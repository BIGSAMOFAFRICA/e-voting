pragma solidity ^0.8.0;

contract Voting {
    string[] public candidates;

    constructor() {
        candidates.push("Elon Musk");
        candidates.push("Barack Obama");
        candidates.push("Donald Trump");
        candidates.push("Joe Biden");
        candidates.push("Oprah Winfrey");
        candidates.push("Mark Zuckerberg");
        candidates.push("Jeff Bezos");
        candidates.push("Cristiano Ronaldo");
        candidates.push("Taylor Swift");
        candidates.push("Bill Gates");
    }

    function getCandidates() public view returns (string[] memory) {
        return candidates;
    }
}
