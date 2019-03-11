const Redis = require('ioredis')
const redis = new Redis()
const CronJob = require('cron').CronJob
const axios = require('axios')

const baseURL = 'http://localhost/wordpress/wp-json/wp/v2'
const POSTS = 'posts'

const cacheFromWP = async () => {

  try {
    const results = await axios.get(`${baseURL}/posts`)
    redis.set(POSTS, results)
  } catch(e) {
    console.log(e.toString())
  }

}

const job =new CronJob('* * * * * *',cacheFromWP)
job.start()
const getPosts = async () => await redis.get(POSTS)

module.exports = {getPosts};
