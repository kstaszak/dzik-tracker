using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DzikTracker.Contract.Entities.DataModel;
using DzikTracker.Contract.Repositories;
using DzikTracker.DB.Repository;
using Microsoft.AspNetCore.Mvc;

namespace DzikTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingsController : ControllerBase
    {
        private readonly IDzikDataRepository _db;

        public TrainingsController(IDzikDataRepository db)
        {
            _db = db;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IQueryable<LastTrainings>> Get()
        {
            return Ok(_db.GetLatestTrainings());
        }
    }
}
