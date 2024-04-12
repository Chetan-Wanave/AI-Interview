//require('dotenv').config();
const {Configuration, OpenAIApi}=require('openai');
const configuration=new Configuration({
    apiKey: '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'
});
const openai=new OpenAIApi(configuration);

async function run(q) {
    const completion=await openai.createCompletion({
       model:"text-davinci-003",
       prompt:q,
       top_p: 1,
       frequency_penalty: 0,
       presence_penalty: 0,
       max_tokens: 1024,
       
        
    });
    console.log("ans:"+completion.data.choices[0].text);
    return completion.data.choices[0].text.trim();
    
}

async function test(arr){
  let ans=[];
  //run("you change your answer please dont do that");
  for(let i=0;i<arr.length;i++) {
ans[i]= await run(arr[i]);
ans[i]=ans[i].replace(/\n/g, '');
ans[i]=await ans[i].trim();
}

return ans;

}
// test();

module.exports=test;