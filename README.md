<p align="center">
  <img src="./img/punk_gauth.svg" alt="PunkGauth" height="250" />
</p>
<p align="center">
  <font size="8"><strong>PunkGauth</strong></font><br/>
  <i>Submission for Uncommon Hacks 2021</i><br/>
  <i>🏷️ <strong>Runner Up, Most Technically Impressive</strong> 🏷️</i><br/>
  <strong>Created By: Jacob Pauls, Isaac Allen, Jacob Lee, and Karl Zhu</strong></br>
</p>

---

## What inspired you guys to build this?
NFTs (Non-Fungible Tokens) are digital representations for ANY sort of online contents and/or assets. In particular, they are represented as digital “receipts” for online content. Lately, the music industry has taken to using these to more widely democratize sales and profits of music-related content. For example, just recently the band Kings of Leon released NFT tokens as part of promotion for their new album. As part of purchasing and minting these NFTs, these owners were granted the a wide array of products, such as digital files for their new album, vinyls, and even concert ticket bundles. 

However, NFT costs are high. In particular, due to the resources required to mine Ethereum in order to produce them. As such, a large sum of the content sold with NFTs is more expensive/lucrative in order to match and accommodate the NFT cost. As well, what is stopping someone from building an NFT claiming they own something they don’t? 

On top of issues with NFTs, streaming services these days almost ritualistically drain musicians of revenue accrued from their work.  Having close relatives, friends, and family within the music industry; we felt as though exposing the democratic economy of blockchain and implementing a way to improve the uniquely identified nature of NFTs could provide an incredibly **uncommon** solution. A solution where - first and foremost, artists receive their fair cut for the art they create. 

## What does this even do?
PunkGauth seeks to mint NFTs that appeal to small bands/independent artists and for media and sellable content through authenticating NFTs using blockchain technology. 

## How did you guys even build this?
The approach to building this was a little complexed. In fact, the easiest part was building the client, server, and gateway and having communication between the front and backend. However, minting NFTs and interacting with Blockchain protocols is a whole different beast.

In order to do this, a package was created on the server that uses an Ethereum based package (known as **Brownie**) to perform NFT minting. In order to do this, we had to build the appropriate class (which in Blockchain, is known as a _contract_) using the **Solidify** API/language. Once complete, the NFT compiled a deployment json file, along with the server-side _"PunkGauth"_ token - which is used to authenticate and identify the NFT within our system and the blockchain.

## What were some wicked challenges you guys ran into?
A challenge that we had was the steep learning curve of using NFTs, Vue.js, and Docker, as various members of the group were only recently exposed to these technologies and concepts. As well, with NFTs and blockchain being foreign words to us before this weekend, there were numerous questions and a **plethora** of research done in order to ensure that our hypothesis about authenticating NFTs was sound. 

Our goal was to be entrepreneurial and forward-thinking, in an area of technological study that is on the come-up. 

_(Seriously, one of our members - Jake - couldn't find completed TypeScript types for _**many**_  of the required packages for Ethereum/NFT development. To boot, most of the related issues on GitHub addressing bugs were all recently active)_

## What we learned
- Blockchain - like, seriously - a _lot_ about blockchain
- Implementing a fully functioning and communicating container/docker-compose architecture using **NGINX**
- How to mint NFTs to represent assets on the blockchain using blockchain technology, such as **Ethereum**, **Solidify**, **Brownie**, and **Python**
- Using **JWT** to create unique tokens to be used for authenticating assets (which we applied to authenticating properly minted NFTs)

## Notable Accomplishments
We are proud that we managed to mint a NFT using Python, and that we were able to use blockchain authentication to build a functional application. As well, we are proud to have a visually appealing frontend and an interface with a high priority on the overarching user.

## What's next for PunkGauth?
First and foremost, music is just the tip of the iceberg. There are a plethora of industries that could benefit from the unique nature of NFTs and the democratic economy associated with blockchain. As well, exposing a PunkGauth API as a service is also on the horizon to match this overarching goal of democratizing and securing rights to all digital assets and their revenue.

Finally, improving and further nurturing a community and marketplace where artists can exchange their NFT authenticated products is a key part of our vision. If we didn't sound crazy enough, we're also looking at making a mobile version of our application, thus making blockchain assets accessible from anywhere. 

---

Made  with 💛 in 2021 
