using System;
using System.Collections.Generic;
using System.Linq;
using DzikTracker.Contract.Entities.DataModel;
using DzikTracker.Contract.Repositories;
using DzikTracker.DB.Repository.Model;
using Microsoft.EntityFrameworkCore;

namespace DzikTracker.DB.Repository
{
    public class DzikDataRepository : IDzikDataRepository
    {
        private readonly string _conn;
        private DzikModel _instance;

        private DzikModel Client => _instance ?? (_instance = new DzikModel(_conn));

        public DzikDataRepository(string conn)
        {
            _conn = conn;
        }

        public IQueryable<LastTrainings> GetLatestTrainings()
        {
            return Client.LastTrainings;
        }
    }
}
