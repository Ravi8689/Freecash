


Deno.serve(async (req) => {

  const CPA_URL="https://www.cpagrip.com/common/offer_feed_json.php?user_id=793194&pubkey=dbbb011a4f1b9af410531b97d7b54715&tracking_id="

  const response = await fetch(CPA_URL)

  if(response.ok){
    const data = await response.json();
    return new Response(
      JSON.stringify(data["offers"]),
      { headers: { "Content-Type": "application/json" } },
    )
  }else{
    message={
      "error":"Error Fetching Offers from Cpa"
    }
    return new Response(
      JSON.stringify(message),
      { headers: { "Content-Type": "application/json" } },
    )
  }
})
