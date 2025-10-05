export default async function handler(req, res) {
      const { key, term } = req.query;

        // 30 pre-defined API keys
          const validKeys = [
              "KEY001","KEY002","KEY003","KEY004","KEY005",
                  "KEY006","KEY007","KEY008","KEY009","KEY010",
                      "KEY011","KEY012","KEY013","KEY014","KEY015",
                          "KEY016","KEY017","KEY018","KEY019","KEY020",
                              "KEY021","KEY022","KEY023","KEY024","KEY025",
                                  "KEY026","KEY027","KEY028","KEY029","KEY030"
                                    ];

                                      // Main API to clone
                                        const mainAPI = "https://osintx.info/API/aetherdemo.php?key=SANJ33T&term=";

                                          // Check key
                                            if (!key || !validKeys.includes(key)) {
                                                return res.status(403).json({ success: false, message: "Invalid or missing API key" });
                                                  }

                                                    if (!term) {
                                                        return res.status(400).json({ success: false, message: "Missing term parameter" });
                                                          }

                                                            try {
                                                                const response = await fetch(`${mainAPI}${term}`);
                                                                    const data = await response.text();

                                                                        res.status(200).send(data);
                                                                          } catch (error) {
                                                                              res.status(500).json({ success: false, message: "API request failed", error: error.message });
                                                                                }
                                                                                }
}