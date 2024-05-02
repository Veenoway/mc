export const faqs = {
  basic: [
    {
      question: "What is a monad?",
      answer:
        "Monad is an upcoming EVM-equivalent layer-1 blockchain offering 10,000 tps.  We offer the best of both worlds for app developers, portability, and extreme performance.",
    },
    {
      question: "What is Monad’s Mission?",
      answer:
        "The value of decentralization has been demonstrated in the past years; what developers can accomplish with a permissionless development sandbox has the potential to leapfrog centralized solutions. The main challenge developers face is throughput and compute cost, Monad addresses these pain points to create the best development environment to trailblaze a new age of decentralized experiences.",
    },
    {
      question: "Why should I care?",
      answer:
        "Mass user adoption implies orders of magnitude more transaction activity than is currently possible.  Currently, Ethereum only has the capacity for 500k daily users making (on average) 2 transactions per day. For Blockchain technology to truly price into the mainstream, we need a solution that can support 100x the users (50M people) and 10x the number of transactions per user. Monad is positioning itself as the best solution to fulfill this vision.",
    },
    {
      question: "What makes blockchain technology valuable?",
      answer:
        "More generally, smart contract blockchains offer two major innovations: === 1.censorship-resistant money/computation 2.composability between apps, allowing new apps to reuse existing functionality. === === Currently, developers are severely limited by high gas costs, limiting their ability to build useful apps that add value for everyday users. Monad is important because it broadens the possible innovations smart contract blockchains can offer users. By removing the tradeoff between higher gas costs and composing with existing applications, developers can build applications that would otherwise be impossible anywhere else.",
    },
    {
      question: "How many validators are there?",
      answer: "Monad’s v0 is expected to host 100-200 validators",
    },
    {
      question: "What does EVM equivalence mean?",
      answer:
        "EVM equivalence means that the computation layer is nearly identical to native Ethereum from a dApp developer’s perspective.",
    },
    {
      question: "Why is EVM equivalence important?",
      answer:
        "By making Monad blockchain EVM equivalent, we can leverage Ethereum’s existing infrastructural network and developer base making the onboarding process of new apps and developers are frictionless as possible.",
    },
    {
      question: "How do Smart Contracts work on Monad?",
      answer:
        "Smart contracts on Monad work identically to smart contacts on Ethereum; with that said, we plan to introduce features exclusive to Monad beyond the day1 launch of mainnet.",
    },
    {
      question: "Which wallets support Monad?",
      answer:
        "All wallets that support Ethereum are able to be used on Monad. Major wallets like Metamask, Coinbase wallet, and hardware wallets like Ledger and Trezor all work from the first day we launch.",
    },
    {
      question: "Who’s building Monad?",
      answer:
        "Monad is being built by Monad labs, a team of world-class talent from Jump Crypto, Jump trading, Quant lab, Pattern Research, and Arista. With decades under our belt ruthlessly optimizing code for low latency and designing distributed systems at scale, we feel confident in Monad’s success.",
    },
  ],
  tech: [
    {
      question:
        "10,000 tps; I've heard this song and dance before; how will you guys actually deliver on this promise? ",
      answer:
        "We accomplish this through parallel and asynchronous execution of EVM transactions alongside other optimizations to both consensus and execution.",
    },
    {
      question: "What is parallel execution?",
      answer:
        "Instead of having one big line of transactions executed one at a time like in other EVM blockchains, Monad executes transactions in parallel so multiple people can have their transactions executed simultaneously.",
    },
    {
      question: "What is asynchronous execution?",
      answer:
        "In most blockchains, execution is a prerequisite to consensus, one cannot be achieved without the other. With asynchronous execution, consensus is achieved before transactions are executed; in other words, the two operate independently.",
    },
    {
      question: "How is Monad different from other EVM blockchains?",
      answer:
        "While other EVM blockchains offer innovations on either the execution of transactions or consensus while keeping the other similar to Ethereum. Monad opted to implement meaningful changes to every level of blockchain computation; by addressing all of these pain points, Monad is able to achieve the most performance while maintaining similar hardware requirements to Ethereum.",
    },
    {
      question: "Why isn't Monad a Rollup?",
      answer:
        "Monad being a rollup, would inherit Ethereum as its consensus solution. In the pursuit of creating the most performant solution possible, we want to introduce optimizations in all aspects of blockchain computation, and to do so, we need to build our own solution.",
    },
  ],
};

// 10,000 tps; I've heard this song and dance before; how will you guys actually deliver on this promise?

// We accomplish this through parallel and asynchronous execution of EVM transactions alongside other optimizations to both consensus and execution.

// What is parallel execution?

// Instead of having one big line of transactions executed one at a time like in other EVM blockchains, Monad executes transactions in parallel so multiple people can have their transactions executed simultaneously.

// What is asynchronous execution?

// In most blockchains, execution is a prerequisite to consensus, one cannot be achieved without the other. With asynchronous execution, consensus is achieved before transactions are executed; in other words, the two operate independently.

// How is Monad different from other EVM blockchains?

// While other EVM blockchains offer innovations on either the execution of transactions or consensus while keeping the other similar to Ethereum. Monad opted to implement meaningful changes to every level of blockchain computation; by addressing all of these pain points, Monad is able to achieve the most performance while maintaining similar hardware requirements to Ethereum.

// Why isn't Monad a Rollup?

// Monad being a rollup, would inherit Ethereum as its consensus solution. In the pursuit of creating the most performant solution possible, we want to introduce optimizations in all aspects of blockchain computation, and to do so, we need to build our own solution.
