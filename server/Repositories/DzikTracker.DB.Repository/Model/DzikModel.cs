using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using DzikTracker.Contract.Entities.DataModel;

namespace DzikTracker.DB.Repository.Model
{
    internal class DzikModel : DbContext
    {
        private readonly string _conn;
        public DzikModel(string conn) : base()
        {
            _conn = conn;
        }

        public virtual DbSet<LastTrainings> LastTrainings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
